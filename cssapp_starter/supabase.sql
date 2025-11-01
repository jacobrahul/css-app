-- Minimal placeholder schema — extend later with RLS
create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  email text,
  name text,
  role text default 'user',
  created_at timestamptz default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  name text,
  created_at timestamptz default now()
);

create table if not exists snapshots (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  competitor_urls jsonb,
  report_json jsonb,
  created_at timestamptz default now()
);
