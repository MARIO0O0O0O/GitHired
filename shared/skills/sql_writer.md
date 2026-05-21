# SKILL: sql_writer
Capabilities:
  - Write clean, portable PostgreSQL DDL.
  - Always use UUID primary keys with gen_random_uuid().
  - Always add created_at TIMESTAMPTZ DEFAULT now().
  - Add comments on every table.
  - Use TEXT not VARCHAR. Use BOOLEAN not SMALLINT.
  - Never use proprietary Supabase-only syntax in core schema.
