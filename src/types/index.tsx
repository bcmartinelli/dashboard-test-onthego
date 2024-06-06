export interface Credits {
  running: number;
  available: number;
  reserved: number;
}

export interface MyResearchs {
  id: number;
  name: string;
  status: string;
}

export interface Research {
  myresearches: Array<MyResearchs>;
  running: string;
  scripting: number;
}

export interface Audience {
  balance: number;
  contacts: number;
  sended: number;
}

export interface DataSite {
  audience: Audience;
  createAt: string;
  id: string;
  credits: Credits;
  researches: Research;
}

export interface Notification {
  comments: number;
  createAt: string;
  id: string;
  mensage: string;
  read: boolean;
}
