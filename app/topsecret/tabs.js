import { useState } from 'react';

const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);

  const handleClick = (e, index, cb = () => {}) => {
    e.preventDefault();
    setActive(index); // Just update the state, no need for router.push
    cb && cb();
  };

  return (
    <div className="tabs">
      <div className="tabs__navigation flex">
        {children.map((child, index) => (
          <a 
            href="#" 
            className={`tabs__navigation__item ${index === active ? 'active' : ''} grow px-4 py-3 text-sm font-medium rounded-3xl focus:z-10 focus:ring-2  text-white hover:text-white bg-neutral-800/40 hover:bg-neutral-800/70 focus:ring-slate-900 focus:text-white`} 
            key={`tab-${index}`} 
            onClick={e => handleClick(e, index, child.props.onClick)}
          >
            {child.props.title}
          </a>
        ))}
      </div>
      <div className="tabs__body py-3">{children[active]}</div>
    </div>
  );
};

export default Tabs;
