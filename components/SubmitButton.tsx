import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    isLoading: boolean;
}

const SubmitButton = ({isLoading, className, children }: ButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading} className={className ?? "w-full shad-primary-btn" }>
        {isLoading ? (
          <div className="flex items-center gap-4">
            <Image 
              src="/assets/icons/loader.svg"
              height={24}
              width={24}
              alt="loader"
              className="animate-spin"
            />
            Loading...
          </div>
        ): children}
    </Button>
  );
};

export default SubmitButton;
