const Contact=()=>{
    return(
        <div className="m-5 p-5"> 
            <h1 className=" text-2xl font-bold  p-2">Contact us</h1>
            <form action="" className=" flex flex-col w-4/12">
                <input  className="border border-black m-2 p-2 "type="text" placeholder="Name" />
                <input className="border border-black m-2 p-2" type="text" placeholder="Message" />
                <button className="border border-black bg-slate-400 m-2 p-2">Submit</button>
            </form>
           
        </div>
    );
}

export default Contact;
