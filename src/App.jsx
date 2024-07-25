import {useForm} from "react-hook-form"
export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } =useForm();

  function onSubmit(data) {
    console.log(data);
    //console.log(JSON.stringify(values, null, 2));
  }
  return (
    <>
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
     <input type="text" {...register("name", {required: "O nome e' obrigatorio"})} placeholder="Nome" />
     {errors.name && <p>{errors.name.message}</p>}
     <input type="email" {...register("email", {required: "O email e' obrigatorio"})} placeholder="Email" />
     {errors.email && <p>{errors.email.message}</p>}
     <button type="submit">Submeter</button>
    </form>
    </>
  )

  /*Using formData
    function handleOnSubmit(event) {
    event.preventDefault();
    //console.log("formulario")
    const formData = new FormData(event.currentTarget);
    //console.log(formData.get('nome'));
    const data = {
      nome: formData.get('nome'),
      email: formData.get('email'),
    }
    console.log("Dados do usuario",data);
  }
  return (
    <>
     <form onSubmit={handleOnSubmit}>
      <input type="text" name="nome" placeholder="Nome" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Submeter</button>
     </form>
    </>
  )
  */ 
}


