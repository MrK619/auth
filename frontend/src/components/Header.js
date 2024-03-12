"use client"
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-between w-full p-8 border-b-2 border-black">
        <div className="flex items-center gap-4">
            
            <h1 className="text-4xl font-bold">Authentication</h1>
        </div>
        <nav>
            <ul className="flex items-center gap-8">
                <li>
                    <Link href="/signin" className="text-xl">
                        Sign In
                    </Link>
                </li>
                <li>
                    <Link href="/signup" className="text-xl">
                        Sign up
                    </Link>
                </li>
            </ul>
        </nav>
        </header>
    );
    }