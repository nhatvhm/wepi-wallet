import { SERVICE_TYPES, EXTERNAL_SERVICE_TYPES } from "../constants/services";
import { APPLICATION_STATE } from "../constants/applicationState";

export interface Response {
  error: string;
  messagedId: number;
  applicationState: APPLICATION_STATE;
  publicKey: string;
  privateKey: string;
  hasPrivateKey: boolean;
  mnemonicPhrase: string;
  isCorrectPhrase: boolean;
  confirmedPassword: boolean;
  password: string;
  mnemonicPhraseToConfirm: string;
  recoverMnemonic: string;
  transaction: {
    sign: (sourceKeys: {}) => void;
  };
  signedTransaction: string;
  source: string;
  type: SERVICE_TYPES;
  url: string;
  isDataSharingAllowed: boolean;
  allAccounts: Array<Account>;
}

export interface ExternalRequest {
  transactionXdr: string;
  type: EXTERNAL_SERVICE_TYPES;
}

export interface Account {
  publicKey: string;
  name: string;
  imported: boolean;
}
