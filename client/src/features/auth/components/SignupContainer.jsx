export default function SignupContainer({ children }) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div
        className={`bg-hero-container  
              w-[90%] p-8 
              sm:w-[50%] 
              min-h-[500px] 
            border-border-black shadow-2xl shadow-black/80 
            relative`}
      >
        {children}
      </div>
    </div>
  );
}
