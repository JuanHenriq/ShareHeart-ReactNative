import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function signUp(email, password, name) {
    if (!email || !password || !name) {
        alert('Por favor preencha todos os campos');
        return;
    }
    try {
        const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
        await updateProfile(cred.user, { displayName: name });
        console.log(`Usuário registrado com email: ${cred.user.email}`);
        const token = await cred.user.getIdToken();
        await AsyncStorage.setItem('userToken', token);
        return { email: cred.user.email, name: cred.user.displayName };
    } catch (err) {
        return err.message;
    }
}

export async function signIn(email, password) {
    if (!email || !password) {
        alert('Por favor preencha todos os campos');
        return;
    }
    try {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        const token = await auth.currentUser.getIdToken();
        await AsyncStorage.setItem('userToken', token);
        console.log(`Usuário logado com email: ${auth.currentUser.email}`);
    } catch (err) {
        alert(err.message);
    }
}

export async function signOutUser() {
    try {
        await signOut(auth);
        await AsyncStorage.removeItem('userToken');
        console.log('Usuário deslogado com sucesso');
    } catch (err) {
        alert(err.message);
    }
}

export async function getCurrentUser() {
    return auth.currentUser;
}

const Auth = {
    signUp,
    signIn,
    signOutUser,
    getCurrentUser
};

export default Auth;
