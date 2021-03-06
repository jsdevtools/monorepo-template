import React, { useContext } from 'react';
import { Button, ButtonGroup, Icon, Text } from '@jsdevtools/tuneable-fluentui';
import { actions, useDispatch } from '@jsdevtools/tuneable';
import Spacer from 'react-add-space';
import { GlobalStateDecorator, ThemeProvider, Overlays } from './shared';
import { withA11y } from '@storybook/addon-a11y';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from './shared-fa.js';

export default {
  title: 'Components/Tuneable/Button',
  component: Button,
  decorators: [withA11y, ThemeProvider, GlobalStateDecorator],
  parameters: {
    viewport: { defaultViewport: 'default' },
  },
};

export const DefaultButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays
      content="Default"
      target={[
        'button1a',
        'button1c',
        'button1d',
        'button1e',
        'button1f',
        'button1g',
        'button1h',
        'button1i',
        'button1j',
      ]}
    >
      <Button
        instance="button1a"
        content={() => (
          <>
            Change Content <FontAwesomeIcon icon="stroopwafel" />
          </>
        )}
        onClick={() => dispatch(actions.chg('button1a', { content: 'Kazaam!' }))}
      />
      <br />
      <Button content="onClick" onClick={() => console.log('clicked')} />
      <br />
      <Button
        instance="button1c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Change Theme Prop"
      />
      <br />
      <Button instance="button1d" onClick={() => dispatch(actions.chg('button1d', { children: 'Kazaam!' }))}>
        Change Content as Children <Spacer amount={8} />
        <FontAwesomeIcon icon="stroopwafel" />
      </Button>
      <br />
      <Button
        instance="button1e"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
      <br />
      <br />
      <Button
        instance="button1f"
        disabled
        content={() => (
          <>
            Change Content <FontAwesomeIcon icon="stroopwafel" />
          </>
        )}
        onClick={() => dispatch(actions.chg('button1a', { content: 'Kazaam!' }))}
      />
      <br />
      <Button instance="button1g" disabled content="onClick" onClick={() => console.log('clicked')} />
      <br />
      <Button
        instance="button1h"
        disabled
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Change Theme Prop"
      />
      <br />
      <Button
        instance="button1i"
        disabled
        onClick={() => dispatch(actions.chg('button1d', { children: 'Kazaam!' }))}
      >
        Change Content as Children <Spacer amount={8} />
        <FontAwesomeIcon icon="stroopwafel" />
      </Button>
      <br />
      <Button
        instance="button1j"
        disabled
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
    </Overlays>
  );
};

export const EmphasisButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Emphasis" target={['button2a']}>
      <Button
        primary
        instance="button2a"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Primary"
      />
      <Button
        secondary
        instance="button2b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
      <br />
      <br />
      <Button
        primary
        disabled
        instance="button2c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Primary"
      />
      <Button
        secondary
        disabled
        instance="button2d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
    </Overlays>
  );
};

export const IconButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Icon" target={['button3a']}>
      <Button primary instance="button3a" onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}>
        <Icon name={['fas', 'calendar']} />
      </Button>
      <Button
        secondary
        instance="button3b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      >
        <Icon name="ChatIcon" />
      </Button>
      <br />
      <br />
      <Button
        primary
        disabled
        instance="button3c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      >
        <Icon name={['fas', 'calendar']} />
      </Button>
      <Button
        secondary
        disabled
        instance="button3d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      >
        <Icon name="ChatIcon" />
      </Button>
    </Overlays>
  );
};

export const IconOnlyButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Icon Only" target={['button4a']}>
      <Button
        primary
        icon={<Icon name="DownloadIcon" />}
        iconOnly
        instance="button4a"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        secondary
        icon={<Icon name="EmailIcon" />}
        iconOnly
        instance="button4b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <br />
      <Button
        primary
        disabled
        icon={<Icon name="DownloadIcon" />}
        iconOnly
        instance="button4c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        secondary
        disabled
        icon={<Icon name="EmailIcon" />}
        iconOnly
        instance="button4d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </Overlays>
  );
};

export const IconAndContentButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Icon and Content" target={['button5a']}>
      <Button
        primary
        icon={<Icon name="EyeIcon" />}
        iconPosition="before"
        instance="button5a"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me before"
      />
      <Button
        primary
        icon={<Icon name="TriangleDownIcon" />}
        iconPosition="after"
        instance="button5b"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me after"
      />
      <br />
      <Button
        secondary
        icon={<Icon name="FlagIcon" />}
        iconPosition="before"
        instance="button5c"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me before"
      />
      <Button
        secondary
        icon={<Icon name="LeaveIcon" />}
        iconPosition="after"
        instance="button5d"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me after"
      />
      <br />
      <br />
      <Button
        primary
        disabled
        icon={<Icon name="EyeIcon" />}
        iconPosition="before"
        instance="button5e"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me before"
      />
      <Button
        primary
        disabled
        icon={<Icon name="TriangleDownIcon" />}
        iconPosition="after"
        instance="button5f"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Click me after"
      />
      <br />
      <Button
        secondary
        disabled
        icon={<Icon name="FlagIcon" />}
        iconPosition="before"
        instance="button5g"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me before"
      />
      <Button
        secondary
        disabled
        icon={<Icon name="LeaveIcon" />}
        iconPosition="after"
        instance="button5h"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Click me after"
      />
    </Overlays>
  );
};

export const FluidButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Fluid" target={['button6a']}>
      <Button
        instance="button6a"
        fluid
        primary
        icon={<Icon name="LikeIcon" />}
        iconPosition="before"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Fits to container"
      />
      <br />
      <Button
        instance="button6b"
        fluid
        secondary
        icon={<Icon name="MicIcon" />}
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
      <br />
      <br />
      <Button
        instance="button6c"
        disabled
        fluid
        primary
        icon={<Icon name="LikeIcon" />}
        iconPosition="before"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="Fits to container"
      />
      <br />
      <Button
        instance="button6d"
        disabled
        fluid
        secondary
        icon={<Icon name="MicIcon" />}
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="See how this very long text shows up on the button"
      />
    </Overlays>
  );
};

export const CircularButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Circular" target={['button7a']}>
      <Button
        instance="button7a"
        circular
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="C"
      />
      <Button
        instance="button7b"
        circular
        icon={<Icon name="MoreIcon" />}
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Confusingly long"
      />
      <br />
      <br />
      <Button
        instance="button7c"
        disabled
        circular
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
        content="C"
      />
      <Button
        instance="button7d"
        disabled
        circular
        icon={<Icon name="MoreIcon" />}
        iconPosition="after"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Confusingly long"
      />
    </Overlays>
  );
};

export const CircularEmphasisButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Circular Emphasis" target={['button8a']}>
      <Button
        instance="button8a"
        circular
        primary
        icon={<Icon name="NumberListIcon" />}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        instance="button8b"
        circular
        secondary
        icon={<Icon name="PlayIcon" />}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <br />
      <Button
        instance="button8c"
        disabled
        circular
        primary
        icon={<Icon name="NumberListIcon" />}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        instance="button8d"
        disabled
        circular
        secondary
        icon={<Icon name="PlayIcon" />}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </Overlays>
  );
};

export const TextButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Sidebar" target={['button9a']}>
      <Button
        instance="button9a"
        text
        icon={<Icon name="QuoteIcon" />}
        iconPosition="before"
        content="Default"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        instance="button9b"
        text
        primary
        content="Primary"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        instance="button9c"
        text
        secondary
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
      <Button
        instance="button9d"
        text
        icon={<Icon name="ReplyIcon" />}
        iconOnly
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <br />
      <Button
        instance="button9e"
        disabled
        text
        icon={<Icon name="QuoteIcon" />}
        iconPosition="before"
        content="Default"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        instance="button9f"
        disabled
        text
        primary
        content="Primary"
        onClick={() => dispatch(actions.chg('themer', { theme: 'teams' }))}
      />
      <Button
        instance="button9g"
        disabled
        text
        secondary
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
        content="Secondary"
      />
      <Button
        instance="button9h"
        disabled
        text
        icon={<Icon name="ReplyIcon" />}
        iconOnly
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </Overlays>
  );
};

export const GroupButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Group" target={['button10a']}>
      <ButtonGroup
        instance="button10a"
        buttons={[
          {
            key: 'search',
            icon: <Icon name="SearchIcon" />,
            iconOnly: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teams' })),
          },
          {
            key: 'send',
            icon: <Icon name="SendIcon" />,
            iconOnly: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'settings',
            icon: <Icon name="SettingsIcon" />,
            iconOnly: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <ButtonGroup
        instance="button10b"
        buttons={[
          {
            key: 'search',
            icon: <Icon name="SearchIcon" />,
            iconOnly: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teams' })),
          },
          {
            key: 'send',
            icon: <Icon name="SendIcon" />,
            iconOnly: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'settings',
            icon: <Icon name="SettingsIcon" />,
            iconOnly: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </Overlays>
  );
};

export const CircularGroupButtons = () => {
  const dispatch = useDispatch();
  return (
    <Overlays content="Circular Group" target={['button11a']}>
      <ButtonGroup
        instance="button11a"
        circular
        buttons={[
          {
            key: 'star',
            icon: <Icon name="StarIcon" />,
            primary: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'sticker',
            icon: <Icon name="StickerIcon" />,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'strike',
            icon: <Icon name="StrikeIcon" />,
            primary: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
      <br />
      <ButtonGroup
        instance="button11b"
        circular
        buttons={[
          {
            key: 'star',
            icon: <Icon name="StarIcon" />,
            primary: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'sticker',
            icon: <Icon name="StickerIcon" />,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
          {
            key: 'strike',
            icon: <Icon name="StrikeIcon" />,
            primary: true,
            disabled: true,
            onClick: () => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' })),
          },
        ]}
        onClick={() => dispatch(actions.chg('themer', { theme: 'teamsHighContrast' }))}
      />
    </Overlays>
  );
};

DefaultButtons.story = { name: 'Default' };
EmphasisButtons.story = { name: 'Emphasis' };
IconButtons.story = { name: 'Icon' };
IconOnlyButtons.story = { name: 'Icon Only' };
IconAndContentButtons.story = { name: 'Icon and Content' };
FluidButtons.story = { name: 'Fluid' };
CircularButtons.story = { name: 'Circular' };
CircularEmphasisButtons.story = { name: 'Circular Emphasis' };
TextButtons.story = { name: 'Text' };
GroupButtons.story = { name: 'Group' };
CircularGroupButtons.story = { name: 'Circular Group' };
