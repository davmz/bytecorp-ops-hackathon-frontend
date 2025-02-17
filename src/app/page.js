import Button from "@/components/Button"

export default function WelcomePage() {
    return (
        // Depth 0: Main frame
        <div className="min-h-screen w-full bg-[#0a0a0a] flex flex-col items-center justify-center gap-16 px-4">
            {/* Depth 1: Welcome text */}
            <h1 className="text-white font-poppins font-normal text-[48px] leading-[65px] text-center max-w-[640px]">
                Welcome to <span className="font-bold">ByteOp Corps</span>
            </h1>

            {/* Action buttons container */}
            <div className="flex flex-col sm:flex-row md:gap-4">
                {/* Depth 1: Login button group */}
                <Button variant="primary" href="/login">
                    Login
                </Button>

                {/* Depth 1: Sign Up button group */}
                <Button variant="secondary" href="/signup">
                    Sign Up
                </Button>
            </div>
        </div>
    )
}