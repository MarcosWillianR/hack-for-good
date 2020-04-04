import * as fb from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from '~/config/firebaseConfig';

const firebase = fb.initializeApp(firebaseConfig);

export default firebase;
