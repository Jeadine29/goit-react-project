import { Circles } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = ({ className = 'backdrop', width = '80', height = '80' }) => {
  return (
    <div className={s[className]}>
      <Circles
        height={height}
        width={width}
        color="#0ef387"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        className={s.loader}
      />
    </div>
  );
};

export default Loader;
