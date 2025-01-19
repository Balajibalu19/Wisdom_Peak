import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users] = useState([
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: { city: "Gwenborough" },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: { name: "Romaguera-Crona" },
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: { city: "Wisokyburgh" },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: { name: "Deckow-Crist" },
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      address: { city: "McKenziehaven" },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: { name: "Romaguera-Jacobson" },
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      address: { city: "South Elvis" },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: { name: "Robel-Corkery" },
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      address: { city: "Roscoeview" },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: { name: "Keebler LLC" },
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      address: { city: "South Christy" },
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
      company: { name: "Considine-Lockman" },
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      address: { city: "Howemouth" },
      phone: "210.067.6132",
      website: "elvis.io",
      company: { name: "Johns Group" },
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "Sherwood@rosamond.me",
      address: { city: "Aliyaview" },
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
      company: { name: "Abernathy Group" },
      image: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Chaim_McDermott@dana.io",
      address: { city: "Bartholomebury" },
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
      company: { name: "Yost and Sons" },
      image: "https://randomuser.me/api/portraits/women/9.jpg",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "Rey.Padberg@karina.biz",
      address: { city: "Lebsackbury" },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: { name: "Hoeger LLC" },
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ]);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};
