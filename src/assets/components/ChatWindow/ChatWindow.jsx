import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function ChatWindow() {
  return (
    <>
      <div className="flex-grow w-full mt-6 mb-2 mr-2 flex justify-between ">
        <div className=" w-4/12  bg-gray-100 rounded-bl-3xl rounded-tl-3xl">
          <div className=" flex justify-center ">
            <h1 className="p-3 font-semibold text-4xl"> Chat Rooms</h1>
          </div>

          {/*    ONE MSG START              */}

          <div className=" p-4 border-t-2 border-b-2 flex items-center">
            <div className="flex ">
              <img
                className=" w-12 h-12 rounded-full"
                src="profile.jpg"
                alt=""
              />
            </div>

            <div className="flex-grow ">
              <div className="flex justify-between ">
                <h1 className="font-bold">John</h1>
                <h1 className=" ">18:05</h1>
              </div>
              <div>
                <h1 className="from-neutral-500">
                  Just a reminder msg to you all
                </h1>
              </div>
            </div>
          </div>

          <div className=" p-4 border-t-2 border-b-2 flex items-center">
            <div className="flex ">
              <img
                className=" w-12 h-12 rounded-full"
                src="profile.jpg"
                alt=""
              />
            </div>

            <div className="flex-grow ">
              <div className="flex justify-between ">
                <h1 className="font-bold">John</h1>
                <h1 className=" ">18:05</h1>
              </div>
              <div>
                <h1 className="from-neutral-500">
                  Just a reminder msg to you all
                </h1>
              </div>
            </div>
          </div>

          <div className=" p-4 border-t-2 border-b-2 flex items-center">
            <div className="flex ">
              <img
                className=" w-12 h-12 rounded-full"
                src="profile.jpg"
                alt=""
              />
            </div>

            <div className="flex-grow ">
              <div className="flex justify-between ">
                <h1 className="font-bold">John</h1>
                <h1 className=" ">18:05</h1>
              </div>
              <div>
                <h1 className="from-neutral-500">
                  Just a reminder msg to you all
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* --------------MAIN WINDOW---------------------------------- */}

        <div className=" w-8/12  bg-white rounded-br-3xl rounded-tr-3xl">
          <div className=" border-b-2 h-16 flex justify-start">
            <a className="text-3xl font-bold p-3" href="">
              John
            </a>
          </div>
          <div id='for_chats' className=" bg-gray-50 h-5/6">



          </div>
          <div className='flex items-center'>
            <input
              className="w-5/6 h-12 rounded ml-3 text-2xl border-2  m-2"
              type="text"
            />
            <Button  className='m-2' variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatWindow;
