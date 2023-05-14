import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { tabs } from '../../../App';
import { Tab, TabsHighlight, TabsNav } from './HeaderTabs.styles';

export const HeaderTabs = () => {
  const [tabBoundingBox, setTabBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedTab, setHighlightedTab] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab);
  };

  const resetHighlight = () => setHighlightedTab(null);

  const highlightStyles = {
    transitionDuration: '',
    opacity: 0,
    width: '',
    transform: '',
  };

  if (tabBoundingBox && wrapperBoundingBox) {
    highlightStyles.transitionDuration = isHoveredFromNull ? '0ms' : '150ms';
    highlightStyles.opacity = highlightedTab ? 1 : 0;
    highlightStyles.width = `${tabBoundingBox.width}px`;
    highlightStyles.transform = `translate(${
      tabBoundingBox.left - wrapperBoundingBox.left
    }px)`;
  }

  const location = useLocation();

  return (
    <TabsNav ref={wrapperRef} onMouseLeave={resetHighlight}>
      <TabsHighlight ref={highlightRef} style={highlightStyles} />
      {tabs.map((tab) => (
        <Link key={tab.value} to={`/${tab.value}`}>
          <Tab
            selected={location.pathname.startsWith(`/${tab.value}`)}
            onMouseOver={(ev) => repositionHighlight(ev, tab)}
          >
            {tab.title}
          </Tab>
        </Link>
      ))}
    </TabsNav>
  );
};
