PGDMP         2                {            postgres    15.3    15.2     %           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            &           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            '           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            (           1262    5    postgres    DATABASE     s   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';
    DROP DATABASE postgres;
                postgres    false            )           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3368            �            1259    16384    content    TABLE     X   CREATE TABLE public.content (
    id bigint NOT NULL,
    messages character varying
);
    DROP TABLE public.content;
       public         heap    postgres    false            �            1259    16389    content_id_seq    SEQUENCE     �   ALTER TABLE public.content ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.content_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    16390    messages    TABLE     �   CREATE TABLE public.messages (
    id bigint NOT NULL,
    "fromID" bigint,
    "toID" bigint,
    "contentID" bigint,
    date date,
    upgradedate date,
    readed boolean
);
    DROP TABLE public.messages;
       public         heap    postgres    false            �            1259    16393    messages_id_seq    SEQUENCE     �   ALTER TABLE public.messages ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    16394    users    TABLE     �   CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(50),
    username character varying(25),
    last_name character varying(25),
    first_name character varying(25)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16397    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218                      0    16384    content 
   TABLE DATA           /   COPY public.content (id, messages) FROM stdin;
    public          postgres    false    214   5                 0    16390    messages 
   TABLE DATA           `   COPY public.messages (id, "fromID", "toID", "contentID", date, upgradedate, readed) FROM stdin;
    public          postgres    false    216   R       !          0    16394    users 
   TABLE DATA           K   COPY public.users (id, email, username, last_name, first_name) FROM stdin;
    public          postgres    false    218   o       *           0    0    content_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.content_id_seq', 1, false);
          public          postgres    false    215            +           0    0    messages_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.messages_id_seq', 1, false);
          public          postgres    false    217            ,           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    219            �           2606    16399    content content_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.content
    ADD CONSTRAINT content_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.content DROP CONSTRAINT content_pkey;
       public            postgres    false    214            �           2606    16401    messages messages_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.messages DROP CONSTRAINT messages_pkey;
       public            postgres    false    216            �           2606    16403    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    218            �           2606    16404    messages contentID    FK CONSTRAINT     �   ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "contentID" FOREIGN KEY ("contentID") REFERENCES public.content(id) NOT VALID;
 >   ALTER TABLE ONLY public.messages DROP CONSTRAINT "contentID";
       public          postgres    false    216    3207    214            �           2606    16409    messages fromID    FK CONSTRAINT     q   ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "fromID" FOREIGN KEY ("fromID") REFERENCES public.users(id);
 ;   ALTER TABLE ONLY public.messages DROP CONSTRAINT "fromID";
       public          postgres    false    218    3211    216            �           2606    16414    messages toID    FK CONSTRAINT     m   ALTER TABLE ONLY public.messages
    ADD CONSTRAINT "toID" FOREIGN KEY ("toID") REFERENCES public.users(id);
 9   ALTER TABLE ONLY public.messages DROP CONSTRAINT "toID";
       public          postgres    false    3211    216    218                  x������ � �            x������ � �      !      x������ � �     