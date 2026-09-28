import React from "react";
import FormButton from "./FormButton";

const Formm = () => {
    const myAction = async(formData: any) =>{
          await new Promise(resolve => setTimeout(resolve, 2000))
          const newPost = {
            name: formData.get('name'),
            email: formData.get('email'),
          };
          console.log(newPost);
    };
  return (
    <form action={myAction}>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" className="border-2" id="name" name="" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="border-2"/>
      </div>
      <FormButton />
    </form>
  );
};

export default Formm;
