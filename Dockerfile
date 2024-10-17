FROM ruby:latest
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update -qq \
    && apt-get install -y --no-install-recommends \
        locales \
        imagemagick \
        build-essential \
        zlib1g-dev \
        python3-pip \
        inotify-tools \
        procps \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/archives/* \
    && sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen \
    && locale-gen

ENV LANG=en_US.UTF-8 \
    LANGUAGE=en_US:en \
    LC_ALL=en_US.UTF-8 \
    JEKYLL_ENV=production

WORKDIR /srv/jekyll

COPY Gemfile Gemfile.lock /srv/jekyll/
RUN gem install jekyll bundler --no-document \
    && bundle install --no-cache

COPY . /srv/jekyll

EXPOSE 8080

COPY bin/entry_point.sh /tmp/entry_point.sh
CMD ["/tmp/entry_point.sh"]
