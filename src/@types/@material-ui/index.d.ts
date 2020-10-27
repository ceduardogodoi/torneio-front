import { Masks } from '../../components/Input/Masking';

declare module '@material-ui/core/InputBase' {
  export interface InputBaseComponentProps {
    /**
     * (Optional) The type of the mask used.
     */
    mask?: Masks;
  }
}
