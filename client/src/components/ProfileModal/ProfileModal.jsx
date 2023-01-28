import { Modal, useMantineTheme } from '@mantine/core';

export function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size= "50%"
      opened= {modalOpened}
      onClose= {()=>setModalOpened(false)}
    >
      <form className='infoForm'>
        <h3>Your Info</h3>
        <div>
          <input type="text"
          name='firstName'
          className='infoInput'
          placeholder='First name'
          />
          <input type="text"
          name='LastName'
          className='infoInput'
          placeholder='Last name'
          />
        </div>
        <div>
        <input type="text"
          name='WorksAt'
          className='infoInput'
          placeholder='Works at'
          />
        </div>
        <div>
          <input type="text"
          name='LivesIn'
          className='infoInput'
          placeholder='Lives in'
          />
          <input type="text"
          name='Country'
          className='infoInput'
          placeholder='Country'
          />
        </div>
        <div>
        <input type="text"
          name='RelationshipStatus'
          className='infoInput'
          placeholder='Relationship Status'
          />
        </div>

        <div>
          Profile Image 
          <input type="file" name='profileImg' />
          Cover Image 
          <input type="file" name='coverImg' />
        </div>

        <button className="button infoButton">
          Update
        </button>
      </form>
    </Modal>
  );
}