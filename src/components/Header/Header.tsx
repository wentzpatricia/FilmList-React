import { HeaderContainer } from './HeaderStyle';
import { BiCameraMovie } from 'react-icons/bi';
const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <h1>Let's see a movie</h1>
        <span>
          <BiCameraMovie />
        </span>
      </div>
    </HeaderContainer>
  );
};

export default Header;
