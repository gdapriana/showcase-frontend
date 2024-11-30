import {Company} from "@/lib/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";

export const CompanyPopover = ({ company }: { company: Company }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="hover:cursor-pointer">
          <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
          <AvatarImage src={company.logo || ""} />
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80 flex flex-col gap-4 justify-start items-stretch">
        <div className="flex justify-start gap-3 items-center">
          <Avatar className="hover:cursor-pointer">
            <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
            <AvatarImage src={company.logo || ""} />
          </Avatar>
          <h3 className='font-bold'>{company.name}</h3>
        </div>
        <div className="">
          <p className="text-sm text-muted-foreground">{company.highlight}</p>
        </div>
        <div className="flex justify-center items-center">
          <Badge variant="secondary">{company.location}</Badge>
        </div>
      </PopoverContent>
    </Popover>
  )
}