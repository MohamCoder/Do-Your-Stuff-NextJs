import { Button } from "@/components/ui/button" 
export default function Home() {
  return (
  <>
  <div className="m-5">
  <div class="flex justify-between w-full">
  	<h2 class="text-4xl">Do Your Stuff</h2>
  	<div className="flex flex-wrap items-center gap-2 md:flex-row">
      		<Button>Add</Button>
    	</div>
  </div>
  </div>
  <hr/>
  <div className="mx-8 mt-5 mb-2">
  <div className="flex justify-between w-full"> 
  	<h3 className=" text-3xl">Tasks:</h3>
	<span className="flex justify-between">
      		<Button className="m-1">G</Button>
      		<Button className="m-1">T</Button>
    	</span>
  </div> 
  </div>

  <hr className="mx-8"/>
  <div id="tasks" className="mx-12 my-6">
	<ul>
	<li><div className="mb-4 flex justify-between w-full">
		<span>
		<h2 className="text-2xl" id="title">workout</h2>
		<h6 className="text-xs">for 3 hours</h6>
		</span>
		<div className="flex-end flex-wrap">
			<Button className="m-1">G</Button>
			<Button className="m-1">Moon</Button>
		</div> 
		</div></li>
		<li><div className="mb-4 flex justify-between w-full">
		<span>
		<h2 className="text-2xl" id="title">study</h2>
		<h6 className="text-xs">for 6 hours</h6>
		</span>
		<div className="flex-end flex-wrap">
			<Button className="m-1">G</Button>
			<Button className="m-1">Moon</Button>
		</div> 
		</div></li>
			<li><div className="mb-4 flex justify-between w-full">
		<span>
		<h2 className="text-2xl" id="title">drink water ;3</h2>
		<h6 className="text-xs">for 111 hours</h6>
		</span>
		<div className="flex-end flex-wrap">
			<Button className="m-1">G</Button>
			<Button className="m-1">Moon</Button>
		</div> 
		</div></li>		
	</ul>
  </div> 
  </>
  );
}
