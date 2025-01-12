import { IconNames } from '@blueprintjs/icons';

import ControlButton from '../ControlButton';
import { ControlBarReturnToAcademyButton } from './ControlBarReturnToAcademyButton';

type ControlBarNextButtonProps = DispatchProps & StateProps;

type DispatchProps = {
  onClickNext?(): any;
  onClickReturn?(): any;
};

type StateProps = {
  key: string;
  questionProgress: [number, number] | null;
};

export function ControlBarNextButton(props: ControlBarNextButtonProps) {
  return props.questionProgress![0] === props.questionProgress![1] ? (
    <ControlBarReturnToAcademyButton onClick={props.onClickReturn} key="return_to_academy" />
  ) : (
    <ControlButton
      label="Next"
      icon={IconNames.ARROW_RIGHT}
      onClick={props.onClickNext}
      options={{ iconOnRight: true }}
    />
  );
}
