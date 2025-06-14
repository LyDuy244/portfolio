import React from 'react';
import Link from "next/link";
import {ArrowUp} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className={"py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center gap-8"}>
      <p className={"text-sm text-muted-foreground"}>&copy; {new Date().getFullYear()} NgocDuy, All rights reserved.</p>
      <Link href={"#hero"}
            className={"p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"}>
        <ArrowUp size={20}/>
      </Link>
    </footer>
  );
};

export default Footer;