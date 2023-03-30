export interface IModal {
  /** modal의 open 여부 */
  open: boolean;
  /** modal의 제목 */
  title: string;
  /** modal의 내용 */
  content: string;
  /** modal이 confirm창인지 */
  isConfirm?: boolean;
}
