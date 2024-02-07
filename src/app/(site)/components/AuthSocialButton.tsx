import { IconType } from "react-icons";

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
     icon: Icon,
    onClick
}) => {
    return ( 
        <button
          type="button"
          onClick={onClick}
          className="
            inline-flex
            w-full 
            justify-center 
            rounded-md 
            bg-stone-100 
            px-4 
            py-2 
            text-stone-800
            hover:text-white
            shadow-sm 
            ring-1 
            ring-inset 
            ring-stone-300 
            hover:bg-rose-500
            focus:outline-offset-0
          "
        >
          <Icon />
        </button>
       );
    }

 
export default AuthSocialButton;