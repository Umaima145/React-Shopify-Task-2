import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Shopify_logo from '../assets/shopify-logo.png';
import '../App.css';
import Free_trial_btn from './Free_trial_btn';

const pages = ['Solutions', 'Pricing', 'Resources', 'Enterprise', "What's new"];
const dropdowns = ['Solutions', 'Resources', "What's new"];

const dropdownLinks = {
  Solutions: [
    {
      title: 'Start',
      links: [
        { name: 'Start your business', desc: 'Build your brand' },
        { name: 'Create your website', desc: 'Online store editor' },
        { name: 'Customize your store', desc: 'Store themes' },
        { name: 'Find business apps', desc: 'Shopify app store' },
        { name: 'Own your site domain', desc: 'Domains & hosting' },
        { name: 'Explore free business tools', desc: 'Tools to run your business' },
      ]
    },
    {
      title: 'Sell',
      links: [
        { name: 'Sell your products', desc: 'Sell online or in person' },
        { name: 'Check out customers', desc: 'World-class checkout' },
        { name: 'Sell online', desc: 'Grow your business online' },
        { name: 'Sell across channels', desc: 'Reach millions of shoppers and boost sales' },
        { name: 'Sell in person', desc: 'Point of Sale (POS)' },
        { name: 'Sell globally', desc: 'International sales' },
        { name: 'Sell wholesale & direct', desc: 'Business-to-business (B2B)' },
        { name: 'Accept online payments', desc: 'Set up forms of payment' },
      ]
    },
    {
      title: 'Market',
      links: [
        { name: 'Market your business', desc: 'Reach & retain customers' },
        { name: 'Market across social', desc: 'Social media integrations' },
        { name: 'Chat with customers', desc: 'Shopify Inbox' },
        { name: 'Nurture customers', desc: 'Shopify Email' },
        { name: 'Know your audience', desc: 'Gain customer insights' },
      ]
    },
    {
      title: 'Manage',
      links: [
        { name: 'Manage your business', desc: 'Track sales, orders & analytics' },
        { name: 'Manage your finances & access funding', desc: 'Shopify Finance' },
        { name: 'Measure your performance', desc: 'Analytics and Reporting' },
        { name: 'Ship orders faster', desc: 'Shopify Shipping' },
        { name: 'Manage your stock & orders', desc: 'Inventory & order management' },
        { name: 'Outsource fulfillment & returns', desc: 'Shopify Fulfillment Network' },
        { name: 'Automate your business', desc: 'Shopify Flow' },
      
      ]
    }
  ],
  Resources: [
    {
      title: 'Help and support',
      links: [
        { name: 'Help and support', desc: 'Get 24/7 support' },
        { name: 'How-to guides', desc: 'Read in-depth business guides' },
        { name: 'Business courses', desc: 'Learn from proven experts' },
        { name: 'Shopify blog', desc: 'Business strategy tips' },
       
      ]
    },
    {
      title: 'Popular topics',
      links: [
        { name: 'What is Shopify?', desc: 'How our commerce platform works' },
        { name: 'Shopify Editions', desc: 'New, innovative Shopify products' },
        { name: 'Founder stories', desc: 'Learn from proven experts' },
        { name: 'Shopify blog', desc: 'Learn from successful merchants' },
        { name: 'Branding', desc: 'Build your brand from scratch' },
       
      ]
    },
    {
      
      links: [
        { name: 'Marketing', desc: 'Build a marketing plan' },
        { name: 'Ecommerce SEO', desc: 'Improve your search ranking' },
        { name: 'Social media strategy', desc: 'Turn social into sales' },
        { name: 'Business growth', desc: 'Scale your business' },
       
      ]
    }
  ],
  "What's new": [
    {
      title: 'Updates',
      links: [
        { name: 'Product updates', desc: 'See what’s new in Shopify' },
        { name: 'Release notes', desc: 'Track version changes' }
      ]
    }
  ]
};

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [megaMenu, setMegaMenu] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileDropdown, setMobileDropdown] = React.useState(null);

  const handleOpenNavMenu = () => setAnchorElNav(true);
  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
    setMobileDropdown(null);
  };

  const handleMegaMenuToggle = (menu) => {
    setMegaMenu((prev) => (prev === menu ? null : menu));
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dropdownArrow = (isOpen) => (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        transition: 'transform 0.3s ease',
        transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)',
        ml: 1,
      }}
    >
      <svg
        fill="#ffffff"
        height="13px"
        width="15px"
        viewBox="0 0 330 330"
        stroke="#ffffff"
        strokeWidth="13.2"
      >
        <path
          d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
          c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394
          c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,
          90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,
          4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
        />
      </svg>
    </Box>
  );

  return (
    <AppBar position="fixed" className={`custom-appbar ${scrolled || megaMenu ? 'scrolled' : ''}`}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img className="header-logo" src={Shopify_logo} alt="Shopify" />
          </a>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            {pages.map((page) => (
              <Box key={page} sx={{ display: 'flex', alignItems: 'center', position: 'relative', mr: 3 }}>
                <Button
                  className="nav-link"
                  onClick={() => dropdowns.includes(page) && handleMegaMenuToggle(page)}
                  sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}
                >
                  {page}
                  {dropdowns.includes(page) && dropdownArrow(megaMenu === page)}
                </Button>
              </Box>
            ))}
          </Box>

          {megaMenu && (
            <Box
              sx={{
                position: 'fixed',
                top: '64px',
                left: 0,
                width: '100%',
                backgroundColor: 'black',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                p: 4,
                zIndex: 10,
                display: 'flex',
                gap: 6,
                flexWrap: 'wrap'
              }}
            >
              {dropdownLinks[megaMenu]?.map((section, idx) => (
                <Box key={idx} sx={{ minWidth: 220 }}>
                  <Typography sx={{ color: '#fff', fontWeight: 'bold', mb: 1 }}>{section.title}</Typography>
                  {section.links.map((item, i) => (
                    <Box key={i} sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" sx={{ color: '#fff' }}>{item.name}</Typography>
                      <Typography variant="body2" sx={{ color: '#aaa' }}>{item.desc}</Typography>
                    </Box>
                  ))}
                </Box>
              ))}
            </Box>
          )}

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            <Button variant="text" sx={{ color: 'white', textTransform: 'none' }}>
              Login
            </Button>
            <Free_trial_btn
              text="Start Free Trial"
              bgColor="#fff"
              textColor="#000"
              hoverBgColor="#d4d4d8"
              hoverTextColor="#000"
            />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={anchorElNav}
        onClose={handleCloseNavMenu}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: 'black', color: 'white', width: 250 } }}
      >
        <List>
          {pages.map((page) => (
            <React.Fragment key={page}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    if (dropdowns.includes(page)) {
                      setMobileDropdown(mobileDropdown === page ? null : page);
                    } else {
                      handleCloseNavMenu();
                    }
                  }}
                >
                  <ListItemText primary={page} />
                  {dropdowns.includes(page) && dropdownArrow(mobileDropdown === page)}
                </ListItemButton>
              </ListItem>
              {mobileDropdown === page && dropdownLinks[page]?.map((section, idx) => (
                <React.Fragment key={idx}>
                  <ListItem disablePadding sx={{ pl: 3 }}>
                    <Typography sx={{ fontWeight: 'bold', color: '#fff', mt: 1 }}>{section.title}</Typography>
                  </ListItem>
                  {section.links.map((link, subIdx) => (
                    <ListItem key={subIdx} disablePadding sx={{ pl: 5 }}>
                      <ListItemButton onClick={handleCloseNavMenu}>
                        <Box>
                          <Typography sx={{ fontSize: '14px', color: '#fff' }}>{link.name}</Typography>
                          <Typography sx={{ fontSize: '12px', color: '#bbb' }}>{link.desc}</Typography>
                        </Box>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}

export default Header;