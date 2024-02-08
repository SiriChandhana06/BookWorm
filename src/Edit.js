import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div id='d'>
      <div onClick={onToggle} style={{ cursor: 'pointer', marginBottom: '5px' }} className='text-2xl pt-4 pb-4 font-bold pl-6'>
        {title} <hr class="border-b border-solid border-black" />
      </div>
      {isOpen && <div className='flex justify-center'>{content}</div>}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};





const Edit = () => {

  

  

  const [editName, setEditName] = useState('');
  const [editUsername, setEditUsername] = useState('');
  const [editProfile, setEditProfile] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');


  
  const vld = () => {
    document.getElementById("pwderror").innerText = "";
    document.getElementById("conpwderror").innerText = "";

    if (createPassword.length < 8) {
      document.getElementById("pwderror").innerText = "Password must be at least 8 characters";
      return false;
    }

    if (createPassword !== confirmPassword) {
      document.getElementById("conpwderror").innerText = "Passwords do not match";
      return false;
    }

    return createPassword.length >= 8 && createPassword === confirmPassword;
  };

  const CP = () => {
    console.log('CP called');
    const handlepassword = () => {
      window.confirm("Your Password was Successfullly Changed");
    };
    if (vld()) {
      const result1 = handlepassword();
      if (result1) {
        setOldPassword('');
        setCreatePassword('');
        setConfirmPassword('');
        console.log('After clearing password states:', oldPassword, createPassword, confirmPassword);
      }
    }
  };






  function content1() {


  
  


    const handleEdit = () => {
      console.log('handleEdit called');
      if ((editName || editUsername || editProfile) || (editName && editProfile) || (editName && editUsername) || (editProfile && editUsername) || (editName && editProfile && editUsername)) {
        window.alert("Your Changes are made Successfully!");
        clearForm();
        console.log('After clearing edit states:', editName, editUsername, editProfile);
      }
    };

    const clearForm = () => {
      setEditName('');
      setEditUsername('');
      setEditProfile('');
    };
    

    return (
      <div>
        <div>
          <div className='flex'>
            <div id='editname' className='flex'>
              <div className='pl-10'><h1 className='text-2xl'>Edit Name:</h1></div>
              <div className='pl-4'><input className='h-10 w-80 pl-4 border-2 border-black' type='text' placeholder='Enter your Name' onChange={(e) => setEditName(e.target.value)} /></div>
            </div>
            <div id='editusername' className='flex'>
              <div className='pl-80'><h1 className='text-2xl'>Edit UserName:</h1></div>
              <div className='pl-4'><input className='h-10 w-80 pl-4 border-2 border-black' type='text' placeholder='Enter your Username' onChange={(e) => setEditUsername(e.target.value)} /></div>
            </div>
          </div>
          <div id='editprofile'>
            <h1 className='flex justify-center text-2xl pt-2'>Change Profile picture:</h1>
            <div id='file'><input type="file" className="flex justify-center file-input file-input-bordered w-full pt-4 max-w-xs" onChange={(e) => setEditProfile(e.target.value)} /></div>
          </div>
          <div id='ss' className='pt-6'><button className="text-black" onClick={handleEdit}>Save</button></div>
        </div>
      </div>
    );
  };

  function content2() {
    return (
      <div>
        <div>
          <div id='op'>
            <h1 className='text-2xl'>Old Password:</h1>
            <input className='h-10 w-80 pl-4 border-2 border-black' type='password' placeholder='Enter your Old Password' onChange={(e) => setOldPassword(e.target.value)} />
          </div>
          <div id='cpwd'>
            <h1 className='text-2xl'>Create Password:</h1>
            <input className='h-10 w-80 pl-4 border-2 border-black' type='password' placeholder='Enter the Password' onChange={(e) => setCreatePassword(e.target.value)} />
            <p id='pwderror'></p>
          </div>
          <div id='conpwd'>
            <h1 className='text-2xl'>Confrim Password:</h1>
            <input className='h-10 w-80 pl-4 border-2 border-black' type='password' placeholder='Reenter the Password' onChange={(e) => setConfirmPassword(e.target.value)} />
            <p id='conpwderror'></p>
          </div>
          <div className='pt-2 pl-28' onClick={CP}>
            <button className="text-black">Save</button>
          </div>
        </div>
      </div>
    );
  };

  function content3() {
    const handlemessage = () => {
      window.confirm("Your Message as beeen Send Successfully!                                        Our Staff will reach you soon");
    };

    const handleMessage = () => {
      console.log('handleMessage called');
      if (message.trim() !== '') {
        const result2 = handlemessage();
        console.log(result2);
        if (result2) {
          setMessage('');
          console.log('After clearing message state:', message);
        }
      }
    };

    return (
      <div>
        <div>
          <h1 className='text-2xl'>Message:</h1>
          <div className='pt-2'>
            <textarea
              className='h-48 w-48 pl-2 border-2 border-black resize-none'
              placeholder='Enter The Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className='pl-14 pt-2' onClick={handleMessage}>
            <button className='text-black'>Send</button>
          </div>
        </div>
      </div>
    );
  }

  function content4() {
    return (
      <div>
        <h1 className='text-2xl pl-10'><u>About Us</u></h1>
        <p className='text-xl pl-20 '>Welcome to Book Worm, where the love for books comes to life! We're a passionate team of bibliophiles dedicated to sharing the magic of literature with you.</p>
        <h1 className='text-2xl pl-10'><u>Our Story</u></h1>
        <p className='text-xl pl-20 '>As avid readers, we started Book Worm to create a vibrant community for book enthusiasts. Our journey is fueled by the joy of discovering and celebrating the beauty of a well-crafted story.</p>
        <h1 className='text-2xl pl-10'><u>What Sets Us Apart</u></h1>
        <p className='text-xl pl-20 '>At Book Worm, we go beyond reviews. We're here to build connections among readers. Join us for engaging discussions, author spotlights, and a diverse range of book recommendations</p>
        <h1 className='text-2xl pl-10'><u>Join Our Community</u></h1>
        <p className='text-xl pl-20'>Let's explore the world of books together! Follow us on social media, share your thoughts, and dive into the endless adventure that reading brings. Thank you for being a part of Book Worm. Happy reading!</p>
      </div>
    )
  }


  const accordionItems = [
    { title: 'Edit', content: content1() },
    { title: 'Change Password', content: content2() },
    { title: 'Help ?', content: content3() },
    { title: 'About Us', content: content4() }
  ];

  return <Accordion items={accordionItems} />;
};

export default Edit;
