import qr from './image-qr-code.png';

function App() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-blue-300'>
      <div class='max-w-sm items-center justify-center mx-auto  bg-white rounded-xl shadow-md '>
        <img
          className='block p-5 rounded-[40px] max-w-full h-auto'
          src={qr}
          alt='qr-code'
        />
        <div className='p-7'>
          <p className='text-center text-xl font-bold font-sans'>
            Improve your front-end skilss by building projects
          </p>
          <p className='text-center text-black text-opacity-50'>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
