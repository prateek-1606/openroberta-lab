PRAGMA foreign_keys=ON;

create table USER(
  ID INTEGER not null,
  ACCOUNT varchar(255) not null,
  PASSWORD  varchar(255) not null,
  EMAIL varchar(255),
  ROLE varchar(32) not null,
  CREATED timestamp not null,
  LAST_LOGIN timestamp not null,
  TAGS varchar(255), -- e.g. HERDER-GYMNASIUM KÖLN Q1 ED_SHEERAN
  
  primary key (ID)
);

create unique index accountIdx on USER(ACCOUNT);

create table PROGRAM(
  ID INTEGER not null,
  NAME varchar(255) not null,
  OWNER_ID INTEGER not null,
  PROGRAM_TEXT varchar(255),
  CREATED timestamp not null,
  LAST_CHANGED timestamp not null,
  LAST_CHECKED timestamp,
  LAST_ERRORFREE timestamp,
  NUMBER_OF_BLOCKS INTEGER,
  TAGS varchar(255), -- e.g. CAR AUTONOMOUS COOL 3WHEELS
  ICON_NUMBER integer not null default(0),
  
  primary key (ID),
  foreign key (OWNER_ID) references USER(ID) ON DELETE CASCADE
);

create unique index nameOwnerIdx on PROGRAM(NAME, OWNER_ID);

create table USER_PROGRAM(
  USER_ID INTEGER not null,
  PROGRAM_ID INTEGER not null,
  RELATION INTEGER not null, -- 1 READ access, 2 WRITE access, 4 DELETE right, (really? not yet used) 8 PROMOTE_READ right, 16 PROMOTE_WRITE right
 
  foreign key (USER_ID) references USER(ID) ON DELETE CASCADE,
  foreign key (PROGRAM_ID) references PROGRAM(ID) ON DELETE CASCADE
);

-- insert into USER values(1,'default','','martha.musterfrau@charity.org',0,'2000-01-01 00:00:00.001','2000-01-01 00:00:00.001');
-- insert into USER values(1,'rb','123456','reinhard.budde@iais.fraunhofer.de',1,'2008-05-13 08:00:00.000','2008-05-13 08:00:00.000');