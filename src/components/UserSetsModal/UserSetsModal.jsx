
import { UserSetsCard } from './ProfileSettings/ProfileSettings';
import { UserSetsForm } from './ProfileSettingsForm/ProfileSettingsForm';
import s from './UserSetsModal.module.css';

export const UserSetsModal = ({ toggleModal }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Profile settings</h2>
      <UserSetsCard />
      <UserSetsForm toggleModal={toggleModal} />
    </div>
  );
};
