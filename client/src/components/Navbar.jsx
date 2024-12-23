import React from 'react'
import {
    HousePlus,
    Moon,
    Menu,
    Sun,
    NotebookPen,
    ChartNetwork  
  } from "lucide-react";
import { GiNotebook } from "react-icons/gi";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
export default function Navbar() {
    const theme = "light"
    const navigate = useNavigate()
    const handleSignout = async () => {

    }
  return (
    <div className="fixed top-0 left-0 right-0 z-20  bg-white dark:bg-gray-900">
      <header className="flex h-16 items-center gap-2 md:gap-4 border-b px-4 md:px-6 justify-between" >
        <div className="flex items-center font-semibold text-xl justify-center">
          <Link to='/'><h1 className='flex gap-2 justify-center items-center text-[20px] md:text-xl'><ChartNetwork strokeWidth={2}/>EchoViz.com</h1></Link>
        </div>
        <div className="flex-grow flex justify-center">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              to="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-1 md:ml-auto md:gap-2 lg:gap-4 ">
          {true ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">
                  <img src='https://github.com/shadcn.png' className='rounded-full h-[28px] md:h-[30px]' alt="User Profile" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="shadcn-sheet-content">
                <DropdownMenuLabel>Subhodeep</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link to ='/todo'>Your Todos</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick = {handleSignout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ):(
            <>
              <div className="hidden md:flex">
                <Link to='/sign-in' className='font-semibold whitespace-nowrap'>Sign In</Link>
              </div>
              <Link to='/sign-up'><Button className='rounded-3xl text-[12px] md:text-sm w-16 md:w-28 h-8 md:h-9'>Sign Up</Button></Link>
            </>
 
          )}

          <div  >
            <div className="whitespace-nowrap flex items-center gap-3" onClick={()=>dispatch(toggleTheme())}>
              {theme==='light'? <Moon size={25}/> : <Sun size={25}/> }
              
            </div>
          </div>
          <Sheet  >
            <SheetContent side="right" className= {`${theme} shadcn-sheet-content`} >
            <SheetHeader className='hidden'>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            {/* <DialogTitle>Navigation Menu</DialogTitle> */}
              <nav className="grid gap-6 text-md font-medium">
                <Link to='/' className="flex items-center gap-2 text-lg font-semibold">
                  <span className="sr-only">Acme Inc</span>
                  <h1 className='flex gap-2'><ChartNetwork  size={28} strokeWidth={2}/> EchoViz.com</h1>
                </Link>
                <Link
                  to='/sign-in'>
                    <Button>Signin</Button>
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </nav>
            </SheetContent>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden w-8 h-8 md:w-10 md:h-10"
              >
                <Menu className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
          </Sheet>
        </div>
      </header>
    </div>
  )
}
