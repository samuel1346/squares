'use client';
import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import db, { storage } from '../../../../firebaseConfig';
import TableComponent from './TableComponent';

const EditComponent = ({ id }) => {
  
  const [btnState, btnSetState] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    image: null,
  });

  const onSubmit = async (e) => {
    e.preventDefault(); 

    try {
      let downloadURL = formData.img;

      if (formData.image) {
        const imageRef = ref(storage, `images/${formData.image.name}`);
        
        const uploadTask = uploadBytesResumable(imageRef, formData.image);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              console.log('completed');
            },
            (error) => {
              console.error('Error al subir la imagen:', error);
              reject(error);
            },
            async () => {
              downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            }
          );
        });
      }

      const dataToPost = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        price: formData.price,
        img: downloadURL,  
      };

      const productDoc = doc(db, 'productos', id);
      await updateDoc(productDoc, dataToPost);

      setFormData({
        name: '',
        description: '',
        category: '',
        price: '',
        image: null,
      });

      console.log('Datos actualizados con éxito');
      alert('EDITADO');
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  return (
    <div className={`${btnState ? 'max-h-8' : 'max-h-[500px]'} overflow-hidden transition-all duration-1000 ease-in-out
    flex flex-col  m-2  border-2 border-zinc-200/75`}>
      <div className="text-zinc-200 m-1 flex flex-row *:mx-2">
        Edit
        <TableComponent btnName = {'dropDown'} btnState={btnState} btnSetState={btnSetState}/>
      </div>
      <form onSubmit={onSubmit}
      className={`flex flex-col items-center *:shadow-sm hover:*:shadow-zinc-200/80
     *:my-4 py-2 *:px-2 *:rounded-md *:text-zinc-200 `}>
        <input 
          type="text" 
          name="name" 
          placeholder="name" 
          onChange={handleChange} 
          value={formData.name} 
          className='bg-zinc-900/80' 
        />
        <input 
          type="text" 
          name="description" 
          placeholder="description" 
          onChange={handleChange} 
          value={formData.description} 
          className='bg-zinc-900/80' 
        />
        <input 
          type="text" 
          name="category" 
          placeholder="category" 
          onChange={handleChange} 
          value={formData.category}
          className='bg-zinc-900/80' 
        />
        <input 
          type="number" 
          name="price" 
          placeholder="price" 
          onChange={handleChange} 
          value={formData.price}
          className='bg-zinc-900/80'  
        />
        <input 
          type="file" 
          name="image"
          placeholder="add an image"
          accept="image/png, image/jpeg, image/svg" 
          onChange={handleChange}
          className='w-[178px] invert bg-zinc-200/0'
        />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
};

export default EditComponent;
