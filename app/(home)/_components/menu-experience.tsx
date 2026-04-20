"use client";

import { ViewTransition, startTransition, useDeferredValue, useState } from "react";
import { featuredCollections } from "../_data/cafe-data";

export function MenuExperience() {
  const [activeId, setActiveId] = useState(featuredCollections[0].id);
  const deferredActiveId = useDeferredValue(activeId);
  const activeCollection =
    featuredCollections.find((collection) => collection.id === deferredActiveId) ??
    featuredCollections[0];

  return (
    <section id="collection" className="bg-[#fbf4ec] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#ecddd0] bg-white p-6 shadow-[0_26px_90px_rgba(94,59,30,0.08)] lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-[#c67c3a]">
              FEATURED PRODUCT
            </p>
            <h2 className="max-w-lg text-4xl leading-tight font-semibold text-[#2f2118] sm:text-5xl">
              &quot;NHA&quot; COLLECTION
            </h2>
            <p className="max-w-md text-base leading-8 text-[#6a5444]">
              Toi giu tu duy menu theo category va cho phep chuyen panel mem hon
              bang `startTransition`, `useDeferredValue` va `ViewTransition`.
            </p>
            <div className="grid gap-3">
              {featuredCollections.map((collection) => {
                const isActive = activeId === collection.id;

                return (
                  <button
                    key={collection.id}
                    type="button"
                    onClick={() =>
                      startTransition(() => {
                        setActiveId(collection.id);
                      })
                    }
                    className={`group rounded-[1.6rem] border px-5 py-4 text-left transition duration-300 ${
                      isActive
                        ? "border-[#e4c6a8] bg-[#fff6ed] text-[#2f2118] shadow-[0_16px_40px_rgba(88,56,28,0.08)]"
                        : "border-[#eee1d4] bg-[#fffdfb] text-[#6a5444] hover:-translate-y-0.5 hover:border-[#ddbb9c]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold">{collection.label}</p>
                        <p className="mt-1 text-sm text-inherit/70">{collection.count} mon</p>
                      </div>
                      <span
                        className={`h-3 w-3 rounded-full transition ${
                          isActive ? "bg-[#c67c3a]" : "bg-[#dcc8b7] group-hover:bg-[#cfa17c]"
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <ViewTransition
            key={deferredActiveId}
            name="menu-panel"
            share="auto"
            enter="auto"
            default="none"
          >
            <div className="rounded-[2rem] border border-[#eee1d4] bg-[radial-gradient(circle_at_top,rgba(248,220,190,0.35),transparent_34%),#fffaf6] p-6 lg:p-8">
              <div className="flex flex-col gap-4 border-b border-[#efe2d6] pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#c67c3a]">
                    {activeCollection.label}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#2f2118]">
                    {activeCollection.count} lua chon noi bat
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-7 text-[#6a5444]">
                  {activeCollection.description}
                </p>
              </div>
              <div className="mt-6 grid gap-4">
                {activeCollection.items.map((item) => (
                  <article
                    key={item.name}
                    className="group rounded-[1.6rem] border border-[#eee1d4] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#ddb48e] hover:shadow-[0_18px_35px_rgba(90,60,30,0.07)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-[#2f2118]">{item.name}</h4>
                        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#8c7563]">
                          {item.type}
                        </p>
                      </div>
                      <span className="rounded-full border border-[#f0d9c2] bg-[#fff3e7] px-3 py-1 text-sm font-medium text-[#a75d22]">
                        {item.price}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </ViewTransition>
        </div>
      </div>
    </section>
  );
}
