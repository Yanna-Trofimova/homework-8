import { Oval } from 'react-loader-spinner';

export const Loader = () => {
  return (
    // <div style={{margin: 'auto',
    // textAlign: 'center',}}>
    //    <ThreeDots
    //   height="50"
    //   width="80"
    //   radius="5"
    //   color="#4fa94d"
    //   ariaLabel="three-dots-loading"
    //   wrapperStyle={{}}
    //   wrapperClassName=""
    //   visible={true}
    // />
    // </div>
    <div >
      <Oval
        height={40}
        width={40}
        color="red"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#b8556c"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
    
    
  );
};