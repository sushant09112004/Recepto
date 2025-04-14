"use client";

import React, { useState } from "react";
import Image from "next/image";
import dataImage from "@/assets/DataTableImage.svg";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const people = [
  {
    id: "olivia1",
    image: dataImage,
    name: "Olivia Rhye",
  },
  {
    id: "olivia2",
    image: dataImage,
    name: "Olivia Rhye",
  },
  {
    id: "olivia3",
    image: dataImage,
    name: "Olivia Rhye",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] justify-center border-yellow-500 text-yellow-700 hover:bg-white hover:text-yellow-700 rounded-2xl"
        >
          {selectedPerson ? (
            <div className="flex items-center gap-2">
              <Image
                src={selectedPerson.image}
                alt={selectedPerson.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <span>{selectedPerson.name}</span>
            </div>
          ) : (
            "Assign"
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[220px] p-0">
        <Command>
          <CommandInput placeholder="Search..." className="h-9" />
          <CommandList>
            <CommandEmpty>No match found.</CommandEmpty>
            <CommandGroup>
              {people.map((person) => (
                <CommandItem
                  key={person.id}
                  value={person.name}
                  onSelect={() => {
                    setSelectedPerson(person);
                    setOpen(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span>{person.name}</span>
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedPerson?.id === person.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
