import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);

const useLogout = () => {
return {logout, error}
}

const logout = async () =>{
error.value = null
try{
await projectAuth.signOut()
} catch (err){
console.log(err.message)
error.value=err.message
}
}

export default useLogout