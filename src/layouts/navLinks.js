const NavLinks = (role) => {
  const links = [
    {
      title: " خطوط الخدمة",
      icon: "PhHouse",
      to: "/",
      roles: ["all"],
    },

    {
      title: "المستخدمين",
      icon: "PhTeacher",
      to: "/Users",
      roles: ["Admin"],
    }, // {
    //   title: "تحليل البيانات",
    //   icon: "PhChart",
    //   to: "/homw24",
    //   roles: ["all"],
    // },
  ];

  return links.filter((link) => {
    const canSeeParent =
      link.roles.includes(role) || link.roles.includes("all");
    if (link.isParent && canSeeParent) {
      link.sub = link.sub.filter((sub) => {
        return sub.roles.includes(role) || sub.roles.includes("all");
      });
    }
    return canSeeParent;
  });
};
export default NavLinks;
