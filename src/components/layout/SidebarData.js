import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: "Dashboard",
        path: "/dashboard",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
              title: 'Report of Proposed Sale',
              path: '/dashboard/report-proposed-sale',
            },
            {
              title: 'Report of Final Sale',
              path: '/dashboard/report-final-sale',
            },
            {
                title: "Report Reason for Private Sale of Refunding/Revenue Bonds",
                path: "/Report-Private-Sale"
            },
            {
                title: "Annual Debt Transparency Report",
                path: "/Annual-Debt-Transparency-Report"
            },
          ]
    },
    {
        title: "Admin",
        path: "/admin",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: "Code Maintenance",
                path: "/admin/code-maintenance",
                // iconClosed: <RiIcons.RiArrowDownSFill />,
                // iconOpened: <RiIcons.RiArrowUpSFill />,
                // subNav: [
                //     {
                //         title: "Code Maintenance",
                //         path: "/admin/code-maintenance"
                //     },
                //     {
                //         title: "Debt Instrument Maintenance",
                //         path: "/admin/debt-instrument-maintenance"
                //     },
                //     {
                //         title: "Financing Purpose Maintenance",
                //         path: "/admin/financing-purpose-maintenance"
                //     },
                // ]
            },
            {
                title: "Debt Instrument Maintenance",
                path: "/admin/debt-instrument-maintenance"
            },
            {
                title: "Financing Purpose Maintenance",
                path: "/admin/financing-purpose-maintenance"
            },
          ]
    },
    {
        title: "Invoice",
        path: "#",
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            
          ]
    }
    
]

export const NavbarTabsData = [
    // {
    //     title: "Report of Proposed Sale",
    //     path: "/dashboard/report-proposed-sale"
    // },
    // {
    //     title: "Report of Final Sale",
    //     path: "/dashboard/report-final-sale"
    // }
    {
        title: "Dashboard",
        path: "/dashboard"
    },
    {
        title: "Admin",
        path: "/admin"
    },
    {
        title: "Invoice",
        path: "#"
    }
]