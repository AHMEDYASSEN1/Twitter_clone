import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ProfileUser } from "../types/types";

const useUserData = () => {
  const [profileUser, setProfileUser] = useState<ProfileUser | undefined>(
    undefined
  );
  const userCollection = collection(db, "profileUserData");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userDataDocs = await getDocs(userCollection);
        if (!userDataDocs.empty) {
          const doc = userDataDocs.docs[0];
          const data = doc.data() as Omit<ProfileUser, "id">;
          const user = {
            ...data,
            id: doc.id,
          };
          setProfileUser(user);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUserData();
  }, []);
  return profileUser;
};

export default useUserData;
