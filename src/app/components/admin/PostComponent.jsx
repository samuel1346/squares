'use client'; 
import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db, { storage } from '../../../../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const PostComponent = () => {
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
      if (!formData.image) {
        alert('Por favor, selecciona una imagen.');
        return;
      }

      const imageRef = ref(storage, `images/${formData.image.name}`);
      
      const uploadTask = uploadBytesResumable(imageRef, formData.image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          console.log('completed')
        },
        (error) => {
          console.error('Error al subir la imagen:', error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          
          const dataToPost = {
            name: formData.name,
            description: formData.description,
            category: formData.category,
            price: formData.price,
            img: downloadURL,
          };

          const dataPosted = collection(db, 'productos');
          await addDoc(dataPosted, dataToPost);

          setFormData({
            name: '',
            description: '',
            category: '',
            price: '',
            image: null,
          });

          console.log('Datos agregados con éxito');
          alert('POSTED');
        }
      );
    } catch (error) {
      console.error('Error al agregar los datos:', error);
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
    <div>
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
        <button type="submit"
          className='bg-zinc-900/80' >Enviar</button>
      </form>
    </div>
  );
};

export default PostComponent;
