'use client';

import React, { useState } from "react";
import Link from "next/link";

function InnerNavbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className="flex flex-col mt-16">
  <div className="flex justify-center">
    <div className="flex space-x-6 font-medium items-center">
      <Link href="/blogs" className="text-gray-900 hover:text-blue-950 text-xl font-bold mt-4">Blogs</Link>
      <span className="text-gray-900 font-bold text-2xl mt-3">|</span>
      <Link href="/news" className="text-gray-900 hover:text-blue-950 text-xl font-bold mt-4">News</Link>
    </div>
  </div>
 </div>
  )
}

export default InnerNavbar