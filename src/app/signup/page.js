"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Input from "@/components/Input";

import loginIllustration from "../../../images/login_illustration.png";

export default function SignupPage() {
    // Form state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        // Depth 0: Main frame
        <div className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-evenly px-4 py-16">
            {/* Depth 1: Left side image */}
            <div className="hidden lg:block w-[440px] h-[440px] mr-8">
                <Image
                    src={loginIllustration}
                    alt="Sign up illustration"
                    width={440}
                    height={440}
                    priority
                />
            </div>

            {/* Depth 1: Sign up form container */}
            <div className="w-full max-w-[760px] bg-white rounded-lg shadow-lg p-8 md:p-12">
                {/* Depth 2: Title */}
                <h1 className="text-[36px] leading-[54px] font-bold font-poppins text-black mb-8">
                    Get Started Now
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Depth 2: Name fields container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Depth 2: First Name group */}
                        <Input
                            label="First Name"
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={setFirstName}
                        />

                        {/* Depth 2: Last Name group */}
                        <Input
                            label="Last Name"
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={setLastName}
                        />
                    </div>

                    {/* Depth 2: Email group */}
                    <Input
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={setEmail}
                    />

                    {/* Depth 2: Password group */}
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={setPassword}
                        showPasswordToggle
                    />

                    {/* Depth 2: Terms checkbox group */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            checked={agreeToTerms}
                            onChange={(e) => setAgreeToTerms(e.target.checked)}
                            className="w-[18px] h-[18px] rounded bg-[#ececec] border border-[#d9d9d9]"
                        />
                        <label 
                            htmlFor="terms" 
                            className="text-[#2f2f2f] font-poppins text-base"
                        >
                            I agree to the terms & policy
                        </label>
                    </div>

                    {/* Depth 2: Submit button */}
                    <button
                        type="submit"
                        className="w-full h-[77px] bg-[#091540] text-white rounded-lg font-poppins font-semibold text-base"
                    >
                        Sign Up
                    </button>

                    {/* Depth 2: Sign in link */}
                    <p className="text-center font-poppins text-[#000] text-base">
                        Have an account?{" "}
                        <Link href="/login" className="text-[#6358dc]">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}