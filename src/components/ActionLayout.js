import React from 'react';
import { Button, FixedLayout } from '@vkontakte/vkui';
import '../css/ActionLayout.css';

/* children: main area content
 * primary: an array of ['button label', button props object]
 * secondary: an array of ['button label', button props object]
 */
export default function ActionLayout(props) {
  return <>
    <div className="action-layout__content">
      {props.children}
    </div>
    <FixedLayout vertical="bottom">
      <div className="action-layout__buttons">
        {props.primary && renderButton(props.primary, 'primary')}
        {props.secondary && renderButton(props.secondary, 'secondary')}
      </div>
    </FixedLayout>
  </>;
}

function renderButton([ label, props ], level) {
  return <Button size="xl" level={level} {...props}>{label}</Button>;
}
