import { PacmanLoader } from 'react-spinners';
import { Box } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: 'none',
  outline: 'none',
};
const Loader = ({ withBackdrop = false, loadColor = '#24CCA7' }) => {
  return (
    <>
      {withBackdrop ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.1)',
          }}
        >
          <Box sx={style}>
            <PacmanLoader color={loadColor} speedMultiplier={1.4} />
          </Box>
        </div>
      ) : (
        <Box sx={style}>
          <PacmanLoader color={loadColor} speedMultiplier={1.4} />
        </Box>
      )}
    </>
  );
};

export default Loader;
