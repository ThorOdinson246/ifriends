import { SelectList } from 'react-native-dropdown-select-list'
import React from 'react';
import { ScrollView } from 'react-native';
import {data, enrollmentdata, religiondata, sexdata} from '../utils/DropDownMenuOptions'
import { TouchableOpacity } from 'react-native';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../firebase';
import { useState } from 'react';
import { TextInput } from 'react-native';

const Roommate = () => {

  
  async function AddUser() {
    // Add a new document with a generated id.
    await addDoc(collection(db, "roommate"), {
      name: name,
        enrollment: selectedEnrollment,
        religion: selectedReligion,
        sex: selectedSex,
    }).then(() => {
        console.log("Document successfully written!");
    }).catch((error) => {
        alert(error.message)
    });
}

  const [selectedReligion, setSelectedReligion] = useState([]);
  const [selectedEnrollment, setSelectedEnrollment] = useState([]);
  const [selectedSex, setSelectedSex] = useState([]);
  const [name, setName] = useState('')

  
  const submitData = () => {

    console.log(selectedReligion)
    console.log(selectedEnrollment)
    console.log(selectedSex)
    AddUser()
    
  }

  return(
    <ScrollView style={styles.container}>   

<TextInput
          placeholder='Name'
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
      <SelectList  
         setSelected={(val) => setSelectedReligion(val)} 
         data={religiondata} 
         save="value"
      ></SelectList>

      <SelectList  
         setSelected={(val) => setSelectedEnrollment(val)} 
         data={enrollmentdata} 
         save="value"
      ></SelectList>

    <SelectList  
         setSelected={(val) => setSelectedSex(val)} 
         data={sexdata} 
         save="value"
        // label="What is your Sewx?"
    ></SelectList>

     {/* Create a submit button that submits this data to firestore  */}

     <TouchableOpacity style={styles.button} onPress={() => {submitData()}}></TouchableOpacity>
    

    </ScrollView>
  )


};

export default Roommate;

const styles = {
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 10,
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
};