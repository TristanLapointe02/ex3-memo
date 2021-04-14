import './Tache.scss';
/* Ex3 - Point F)ii) */
import formaterDateEtHeure from '../services/utilitaires';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

export default function Tache({id, texte, completee, date}) {
  return (
    <div className="Tache">
      {/* Ex3 - Point F)iii) */}
      <CheckIcon />
      {/* Ex3 - Point F)i) */}
      <span className="texte">{texte}</span>
      {/* Ex3 - Point F)ii) */}
      <span className="date">{formaterDateEtHeure(date)}</span>
      {/* Ex3 - Point F)iii) */}
      <DeleteIcon />
    </div>
  );
}