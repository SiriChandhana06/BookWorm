import React, { useState } from 'react';

    const AccordionItem = ({ title, content, isOpen, onToggle }) => {
      return (
        <div>
          <div onClick={onToggle} style={{ cursor: 'pointer', marginBottom: '5px' }} className='text-2xl pt-4 pb-4 font-bold pl-6'>
            {title} <hr/><hr/>
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
       
    function content1(){
      return(
        <div>
          <div>
          <h1>Edit Name:</h1>
          <input type='text' placeholder='Enter your Name'/>
          <h1>Edit UserName:</h1>
          <input type='text' placeholder='Enter your Username'/>
          <h1>Change Profile picture:</h1>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs"/>
          </div>
        </div>
      );
    };

    function content2(){
      return(
        <div>
          <div>
            <h1>Old Password:</h1>
            <input type='password' placeholder='Enter your Old Password'/>
            <h1>Create Password:</h1>
            <input type='password' placeholder='Enter the Password'/>
            <h1>Confrim Password:</h1>
            <input type='password' placeholder='Reenter the Password'/>
            <button>Save</button>
          </div>
        </div>
      );
    };
    
 const Edit = () => {
      const accordionItems = [
        { title: 'Edit', content: content1() },
        {title: 'Change Password',  content: content2() },
        {title:'About Us', content:''},
        {title:'Help ?' , content:''}
      ];
    
      return <Accordion items={accordionItems} />;
    };
    
export default Edit;
    