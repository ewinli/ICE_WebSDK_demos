export type JobState = 'init' | 'running' | 'done' | 'error';
export declare enum JobType {
    digitalHuman = "digitalHuman",
    tts = "tts",
    asr = "asr",
    videoTranslation = "videoTranslation",
    detext = "detext",
    captionExtraction = "captionExtraction",
    mapper = "mapper"
}
export declare const JOB_DEFAULT_DURATION = 30;
export declare const ASR_MAX_PLACEHOLDER_LENGTH = 30;
export declare const MIN_MEDIA_SPEED = 0.1;
export declare const MAX_SERVER_MEDIA_SPEED = 100;
export declare const MAX_MEDIA_SPEED = 16;
export interface IObserver<T> {
    next: (value: T) => void;
    error: (err: any) => void;
    complete: () => void;
}
export interface IUnsubscribable {
    unsubscribe(): void;
}
export interface IObservable<T> {
    subscribe(observer: Partial<IObserver<T>>): IUnsubscribable;
    subscribe(next?: ((value: T) => void) | null, error?: ((error: any) => void) | null, complete?: (() => void) | null): IUnsubscribable;
}
export type Locales = 'zh-CN' | 'en-US';
export type MediaType = 'video' | 'audio' | 'image' | 'font';
export type EventCallbackType = 'playerInit' | 'playerException' | 'playerPerformance';
export type MediaOrigin = 'private' | 'public' | 'mediaURL';
export type EventCallback = (event: {
    type: EventCallbackType;
    data: {
        message?: string;
        args?: {
            [key: string]: any;
        };
    };
}) => void;
export type ScssModuleStyles = {
    readonly [key: string]: string;
};
export interface InputTabs {
    id: string;
    name: string;
}
interface StickerResponse {
    total: number;
    stickers: InputSticker[];
}
export interface ASRResult {
    content: string;
    from: number;
    to: number;
}
export interface AudioASRResult {
    begin_time?: string;
    end_time?: string;
    text?: string;
    content?: string;
    from?: number;
    to?: number;
}
export interface ASRJobInfo {
    jobId?: string;
    jobDone: boolean;
    jobError?: string;
    result?: ASRResult[];
}
export interface TTSJobInfo {
    jobId?: string;
    jobDone: boolean;
    jobError?: string;
    asr?: AudioASRResult[];
    result?: InputAudio | null;
}
export interface WasmWorkerConfig {
    worker: string;
    workerName: string;
    workerType?: 'url' | 'blob';
    workerSize?: number;
    workerConcurrency?: number;
    wasm: string;
}
interface CustomTexts {
    importButton?: string;
    updateButton?: string;
    produceButton?: string;
    backButton?: string;
    logoUrl?: string;
    colorMattingTips?: string;
    realMattingTips?: string;
}
export interface CustomFontItem {
    key: string;
    name?: string;
    url: string;
    urlType?: 'dynamic' | 'static';
    fontServerScale?: {
        common: number;
        decorated: number;
    };
}
export type PreviewWaterMark = {
    url?: string;
    mediaId?: string;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    xPlusWidth?: number;
    yPlusHeight?: number;
    opacity?: number;
};
export type StageWaterMark = {
    url: string;
    width: number;
    height: number;
    x: number;
    y: number;
    xPlusWidth: number;
    yPlusHeight: number;
    opacity: number;
};
export type DynamicSrcObj = {
    url: string;
    type?: MediaType;
    maskUrl?: string;
    sourceData?: SourceData;
    codec?: string;
};
export interface VoiceConfig {
    volume: number;
    speech_rate: number;
    pitch_rate: number;
    format?: string;
    custom?: boolean;
}
export interface ExportItem {
    coverUrl: string;
    duration: number;
    aspectRatio: PlayerAspectRatio;
    mediaMarks: MediaMark[];
    timeline: IBackendTimeline;
    recommend?: IProduceRecommend;
    title?: string;
}
export interface PlayerInitConfig {
    licenseConfig?: IConfig['licenseConfig'];
    ttsConfig?: IConfig['ttsConfig'];
    asrConfig?: IConfig['asrConfig'];
    avatarConfig?: IConfig['avatarConfig'];
    getTimelineMaterials?: IConfig['getTimelineMaterials'];
    mode?: 'component' | 'player';
    componentClass?: string;
    container: Element;
    locale?: Locales;
    controls?: boolean;
    timeline?: any;
    playbackRate?: number;
    aspectRatio?: string;
    minWidth?: number | string;
    customFontList?: CustomFontItem[];
    sutitleWorkerCount?: number;
    trackLog?: boolean;
    invisableRunning?: boolean;
    maxCanvasConfig?: {
        width?: number;
        height?: number;
    };
    getMediaInfo?: (mediaId: string, mediaType: MediaType, mediaOrigin?: MediaOrigin | undefined, inputUrl?: string | undefined) => Promise<string | DynamicSrcObj>;
}
export type StarryModel = {
    queen: {
        hModel: string;
        vModel: string;
        tfScript: string;
    };
};
export type TimelineMaterial = {
    mediaIdType: MediaIdType;
    mediaId: string;
    mediaType: MediaType;
};
type SPlayerConfig = {
    wasmDomain: string;
    renderType?: 'wasm' | 'native';
};
export type RangeAreaInitOption = {
    keepRatio?: boolean;
    rectConfig: {
        x: number;
        y: number;
        width: number;
        height: number;
        fill?: string;
        opacity?: number;
    };
    transformerColor?: string;
};
export type RangeAreaItem = {
    getArea: () => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    remove: () => void;
    on: (type: 'dragend' | 'dragstart' | 'transformstart' | 'transform' | 'transformend' | 'dragmove', handler: (ev: any) => void) => () => void;
    visible: (val: boolean) => void;
    setArea: ({ x, y, width, height }: {
        x: number;
        y: number;
        width: number;
        height: number;
    }) => {
        x: number;
        y: number;
        width: number;
        height: number;
    };
};
export interface IConfig {
    trackLog?: boolean;
    locale?: Locales;
    mode?: string;
    container?: Element | DocumentFragment | null;
    defaultAspectRatio?: PlayerAspectRatio | string;
    customAspectRatioList?: Array<string | PlayerAspectRatio>;
    defaultSubtitleText?: string;
    useDynamicSrc?: boolean;
    cacheDynamicSrc?: {
        cacheTime: number;
    };
    dynamicSrcQps?: number;
    dynamicSrcRefreshTime?: number;
    customFontList?: Array<string | ((key: string) => boolean) | CustomFontItem>;
    customTexts?: CustomTexts;
    customVoiceGroups?: VoiceGroup[];
    disableMediaMarks?: boolean;
    invisableRunning?: boolean;
    onBackButtonClick?: () => void;
    onContentChange?: (ev: {
        type: 'subtitle' | 'avatar';
        value: string;
    }) => string | undefined;
    hasTranscodedAudio?: boolean;
    getAudioByMediaId?: (mediaId: string) => Promise<string>;
    getDynamicSrc?: (mediaId: string, mediaType: MediaType, mediaOrigin?: MediaOrigin, inputUrl?: string) => Promise<string | DynamicSrcObj>;
    getEditingProjectMaterials?: (params?: TimelineMaterial[]) => Promise<InputMedia[]>;
    getTimelineMaterials?: (params: TimelineMaterial[]) => Promise<InputMedia[]>;
    searchMedia?: (mediaType: MediaType, inputMode?: 'list' | 'one') => Promise<InputMedia[]>;
    deleteEditingProjectMaterials?: (mediaId: string, mediaType: MediaType) => Promise<void>;
    submitASRJob?: (mediaId: string, startTime: string, duration: string) => Promise<ASRResult[]>;
    asrConfig?: {
        interval?: number;
        defaultText?: string;
        maxPlaceHolderLength?: number;
        submitASRJob: (mediaId: string, startTime: string, duration: string) => Promise<ASRJobInfo>;
        getASRJobResult?: (jobId: string) => Promise<ASRJobInfo>;
    };
    submitAudioProduceJob?: (text: string, voice: string, voiceConfig?: VoiceConfig) => Promise<InputAudio>;
    ttsConfig?: {
        interval?: number;
        submitAudioProduceJob: (text: string, voice: string, voiceConfig?: VoiceConfig) => Promise<TTSJobInfo>;
        getAudioJobResult?: (jobId: string) => Promise<TTSJobInfo>;
    };
    getStickerCategories?: () => Promise<InputTabs[]>;
    getStickers?: (config: {
        categoryId: string;
        page: number;
        size: number;
    }) => Promise<StickerResponse>;
    getEditingProject?: () => Promise<{
        timeline?: IBackendTimeline;
        FEExtend?: any;
        timelineConvertStatus?: 'Unconverted' | 'Converting' | 'Converted' | 'ConvertFailed';
        title?: string;
        projectId?: string;
        modifiedTime?: string;
    }>;
    updateEditingProject?: (data: {
        title?: string;
        coverUrl?: string;
        duration?: number;
        timeline?: IBackendTimeline;
        isAuto: boolean;
    }) => Promise<{
        projectId: string;
    }>;
    produceEditingProjectVideo?: (data: ExportItem) => Promise<void>;
    exportFromMediaMarks?: (data: ExportItem[]) => Promise<void>;
    exportVideoClipsSplit?: (data: ExportItem[]) => Promise<void>;
    exportVideoClipsMerge?: (data: ExportItem) => Promise<void>;
    exportTemplate?: (data: {
        coverUrl: string;
        duration: number;
        timeline: IBackendTimeline;
    }) => Promise<void>;
    updateAutoInterval?: number;
    updateTemplate?: (data: {
        coverUrl: string;
        duration: number;
        timeline: IBackendTimeline;
        aspectRatio: PlayerAspectRatio;
        recommend?: IProduceRecommend;
        isAuto: boolean;
    }) => Promise<void>;
    eventCallback?: EventCallback;
    subtitleExporter?: (lines: SubtitleLine[]) => void;
    getPreviewWaterMarks?: () => Promise<PreviewWaterMark[]>;
    avatarConfig?: DigitalHumanRequireConfig & Partial<DigitalHumanOptionConfig>;
    sliderConfig?: SliderConfig;
    headerConfig?: HeaderConfig;
    maxCanvasConfig?: {
        width?: number;
        height?: number;
    };
    snapshotConfig?: {
        onSnapshot: (image: SnapshotImage) => Promise<InputImage | undefined>;
    };
    disableSeparateAudioTrack?: boolean;
    disableAutoAspectRatio?: boolean;
    disableCustomAspectRatio?: boolean;
    disableAutoJobModal?: boolean;
    browser32?: boolean;
    disableGreenMatting?: boolean;
    disableRealMatting?: boolean;
    disableDenoise?: boolean;
    audioWaveRenderDisabled?: boolean;
    publicMaterials?: PublicMaterialLibrary;
    audioWaveCacheTime?: number;
    subtitleConfig?: {
        customTextures?: {
            list: () => Promise<Array<{
                key: string;
                url: string;
            }>>;
            onAddTexture: () => Promise<{
                key: string;
                url: string;
            }>;
            onDeleteTexture: (key: string) => Promise<void>;
        };
    };
    licenseConfig?: {
        rootDomain?: string;
        licenseKey?: string;
    };
    saveProjectMaterialsInTimeline?: boolean;
    videoTranslation?: VideoTranslation;
    resourceConfig?: {
        filterTab: (tab: {
            id: MediaType;
        }) => boolean;
    };
}
export interface TranslationJobParams {
    type: 'Video' | 'Text' | 'TextArray';
    mediaId?: string;
    mediaIdType?: MediaIdType;
    text?: string;
    textArray?: string[];
    editingConfig: {
        SourceLanguage: string;
        TargetLanguage: string;
        DetextArea?: string;
        SupportEditing?: boolean;
        SubtitleTranslate?: {
            TextSource: 'OCR' | 'SubtitleFile';
            OcrArea?: string;
            SubtitleConfig?: string;
        };
    };
}
export interface TranslationJobInfo {
    jobId?: string;
    jobDone: boolean;
    jobError?: string;
    result?: {
        video?: InputVideo;
        timeline?: string;
        text?: string;
        textArray?: Array<{
            Target: string;
            Source: string;
        }>;
    };
}
export interface DetextJobParams {
    mediaId: string;
    mediaIdType: MediaIdType;
    box?: 'auto' | Array<[number, number, number, number]>;
}
export interface DetextJobInfo {
    jobId?: string;
    jobDone: boolean;
    jobError?: string;
    result?: {
        video?: InputVideo;
    };
}
export interface CaptionExtractionJobParams {
    mediaId: string;
    mediaIdType: MediaIdType;
    box?: 'auto' | Array<[number, number, number, number]>;
}
export interface CaptionExtractionJobInfo {
    jobId?: string;
    jobDone: boolean;
    jobError?: string;
    result?: {
        srtContent?: string;
    };
}
export type VideoTranslation = {
    language?: {
        source: Array<{
            value: string;
            label: string;
        }>;
        target: Array<{
            value: string;
            label: string;
        }>;
    };
    translation?: {
        interval?: number;
        submitVideoTranslationJob: (params: TranslationJobParams) => Promise<TranslationJobInfo>;
        getVideoTranslationJob: (jobId: string) => Promise<TranslationJobInfo>;
    };
    detext?: {
        interval?: number;
        submitDetextJob: (param: DetextJobParams) => Promise<DetextJobInfo>;
        getDetextJob: (jobId: string) => Promise<DetextJobInfo>;
    };
    captionExtraction?: {
        interval?: number;
        submitCaptionExtractionJob: (param: CaptionExtractionJobParams) => Promise<CaptionExtractionJobInfo>;
        getCaptionExtractionJob: (jobId: string) => Promise<CaptionExtractionJobInfo>;
    };
};
export interface FEConfig {
    autoProportion?: string;
    customProportion?: string;
    projectMaterials?: string;
    ProjectMaterials?: string;
}
export type PublicMaterialLibrary = {
    getLists: () => Promise<MaterialList[]>;
    name?: string;
    pageSize?: number;
};
export type MaterialList = {
    name?: string;
    key: string;
    tag?: string;
    mediaType: 'video' | 'audio' | 'image';
    styleType?: 'video' | 'audio' | 'image' | 'background';
    getItems: (pageIndex: number, pageSize: number) => Promise<{
        items: InputMedia[];
        end: boolean;
    }>;
};
export type SnapshotImage = {
    file: Blob;
    type: string;
    currentTime: number;
};
export type SliderItem = {
    name: string;
    isDefault: boolean;
    hidden: boolean;
    index: number;
    data?: any;
};
type SliderConfig = {
    display?: boolean;
    render?: (container: HTMLDivElement) => void;
    map?: (item: SliderItem) => SliderItem;
    customItems?: () => Array<{
        title: string;
        item: SliderItem;
        render: (container: HTMLDivElement, item: SliderItem) => void;
    }>;
};
type HeaderConfig = {
    display?: boolean;
    part?: {
        left?: boolean;
        title?: boolean;
        right?: boolean;
    };
    render?: (container: HTMLDivElement) => void;
};
type DigitalHumanOptionConfig = {
    audioMaxDuration: number;
    audioMinDuration: number;
    textMaxLength: number;
    refreshInterval: number;
    outputConfigs: Array<{
        width: number;
        height: number;
        bitrates: number[];
    }>;
    filterOutputConfig?: (item: DigitalHuman, config: DigitalHumanOptionConfig['outputConfigs']) => DigitalHumanOptionConfig['outputConfigs'];
    suportAudioFormats: string[];
};
type DigitalHumanRequireConfig = {
    getAvatarList: () => DigitalHumanList[];
    getAvatar?: (avatarId: string) => Promise<DigitalHuman>;
    submitAvatarVideoJob: <T extends keyof DigitalHumanJobParamTypes>(job: DigitalHumanJob<T>) => Promise<DigitalHumanJobInfo>;
    getAvatarVideoJob: (jobId: string) => Promise<DigitalHumanJobResult>;
};
export type DigitalHumanConfig = DigitalHumanOptionConfig & DigitalHumanRequireConfig;
export type DigitalHumanOutputParams = {
    bitrate: number;
    width: number;
    height: number;
};
export type DigitalHumanTextParams = {
    voice: string;
    volume: number;
    speechRate: number;
    pitchRate: number;
    custom?: boolean;
    autoASRJob?: boolean;
};
export type DigitalHumanAudioParams = {
    title: string;
    autoASRJob?: boolean;
};
export type DigitalHumanJobType = keyof DigitalHumanJobParamTypes;
export type DigitalHumanJob<T extends DigitalHumanJobType> = {
    type: T;
    title: string;
    avatar: DigitalHuman;
    data: DigitalHumanJobParamTypes[T];
};
export type DigitalHumanJobParamTypes = {
    text: {
        text?: string;
        params?: DigitalHumanTextParams;
        output?: DigitalHumanOutputParams;
    };
    audio: {
        mediaId?: string;
        mediaIdType?: MediaIdType;
        params?: DigitalHumanAudioParams;
        output?: DigitalHumanOutputParams;
    };
};
export interface DigitalHumanJobInfo {
    jobId: string;
    mediaId: string;
}
export interface DigitalHumanJobResult {
    jobId: string;
    mediaId: string;
    done: boolean;
    errorMessage?: string;
    job?: DigitalHumanJob<any>;
    video?: InputVideo;
    subtitleClips?: ASRResult[];
}
export interface DigitalHuman {
    avatarId: string;
    avatarName: string;
    coverUrl: string;
    videoUrl?: string;
    outputMask?: boolean;
    transparent?: boolean;
    width?: number;
    height?: number;
    bitrate?: number;
}
export interface DigitalHumanList {
    default: boolean;
    id: string;
    name: string;
    getItems: (pageNo: number, pageSize: number) => Promise<{
        total: number;
        items: DigitalHuman[];
    }>;
}
export interface SpriteConfig {
    num: string;
    lines: string;
    cols: string;
    cellWidth?: string;
    cellHeight?: string;
}
export interface BackgroundConfig {
    type: MaterialBackgroundType;
    color?: string;
    blurRadius?: number;
}
export type FlipType = 'horizontal' | 'vertical';
export type InputMedia = (InputVideo | InputAudio | InputImage) & {
    size?: string;
};
export interface MediaMark {
    startTime: number;
    endTime: number;
    content: string;
}
export interface ClipMark extends MediaMark {
    id: string;
    includedInProduction: boolean;
}
export declare enum MarkType {
    Point = 0,
    Fragment = 1
}
export interface InputSource {
    appendType?: 'first' | 'tail';
    sourceState?: 'ready' | 'loading' | 'fail';
}
export type MediaIdType = 'mediaId' | 'mediaURL';
export interface InputVideo extends InputSource {
    mediaId: string;
    mediaIdType?: MediaIdType;
    mediaType: 'video';
    video: {
        title: string;
        coverUrl?: string;
        duration: number;
        format?: string;
        src?: string;
        snapshots?: string[];
        sprites?: string[];
        spriteConfig?: SpriteConfig;
        width?: number;
        height?: number;
        rotate?: number;
        bitrate?: number;
        fps?: number;
        hasTranscodedAudio?: true;
        agentAudioSrc?: string;
        marks?: MediaMark[];
        codec?: string;
    };
}
export interface InputAudio extends InputSource {
    mediaId: string;
    mediaIdType?: MediaIdType;
    mediaType: 'audio';
    audio: {
        title: string;
        duration: number;
        coverUrl?: string;
        src?: string;
        marks?: MediaMark[];
        formatNames?: string[];
    };
}
export interface InputImage extends InputSource {
    mediaId: string;
    mediaIdType?: MediaIdType;
    mediaType: 'image';
    image: {
        title: string;
        coverUrl?: string;
        src?: string;
        width?: number;
        height?: number;
        rotate?: number;
    };
}
export interface InputFont extends InputSource {
    mediaId: string;
    mediaIdType?: MediaIdType;
    mediaType: 'font';
    font: CustomFontItem;
}
interface InputSticker {
    mediaId: string;
    mediaIdType?: MediaIdType;
    src: string;
}
export declare enum MaterialType {
    Video = "Video",
    Transition = "Transition",
    Effect = "VFX",
    Filter = "Filter",
    Audio = "Audio",
    Image = "Image",
    Subtitle = "Text",
    Sticker = "Sticker"
}
export declare enum GlobalMaterialType {
    GlobalImage = "GlobalImage",
    GlobalAudio = "GlobalAudio",
    GlobalText = "GlobalText"
}
export declare enum AiJobType {
    AI_Avatar = "AI_Avatar",
    AI_TTS = "AI_TTS",
    AI_ASR = "AI_ASR"
}
export declare enum MaterialBackgroundType {
    None = "None",
    Blur = "Blur",
    Color = "Color"
}
export declare enum TrackType {
    Effect = "Effect",
    Subtitle = "Subtitle",
    Sticker = "Image",
    Video = "Video",
    Audio = "Audio"
}
export interface TemplateConfig {
    isFromTemplate?: boolean;
    templateReplaceable?: boolean;
    templateMaterialId?: string;
    templateRemark?: string;
    templateAdvanceSetting?: {
        [key: string]: any;
    };
    templateEffectSetting?: {
        group: 'all' | 'custom';
        items?: Array<{
            subType: string;
        }>;
    };
}
export interface BasicConfig extends TemplateConfig {
    timelineIn: number;
    timelineOut: number;
    duration: number;
    _durationRatio?: number;
    _timelineInMode?: 'value' | 'unknown';
    _timelineOutMode?: 'value' | 'unknown';
    clipId?: string;
    referenceClipId?: string;
    noReferTimelineIn?: boolean;
    noReferTimelineOut?: boolean;
}
export interface EffectVFX {
    subType: string;
    extParams: string;
    order?: number;
}
export type EffectFilter = EffectVFX;
interface EffectVolume {
    gain: number;
}
interface EffectFadeIn {
    duration: number;
    curve: string;
}
interface EffectFadeOut {
    duration: number;
    curve: string;
}
export interface IProduceRecommend {
    width?: number;
    height?: number;
    bitrate?: number;
}
export interface IVideoSourceData extends IProduceRecommend {
    fps?: number;
    rotate?: number;
}
export interface IImageSourceData extends IProduceRecommend {
    rotate?: number;
}
export type SourceData = IVideoSourceData | IImageSourceData;
export declare enum VIDEO_HAS_AUDIO {
    'YES' = 0,
    'NO' = 1,
    'UNKNOWN' = 2
}
export declare enum SHOW_AUDIO_WAVEFORM_FAILED_REASON {
    'NO_AUDIO' = 0,
    'VIDEO_CANNOT_DECODED' = 1,
    'VIDEO_VIRGIN_DURATION_MORE_THAN_3H' = 2,
    'NOT_ENOUGH_MEMORY' = 3
}
export type MattingConfig = {
    type: 'AI_Matting' | 'AI_RealMatting';
    config: {
        color?: string;
        auto?: number;
        thres?: number;
    };
};
export type JobRunnerConfigs = {
    video: {
        type: JobType.digitalHuman | JobType.mapper;
    };
    audio: {
        type: JobType.tts;
    };
    subtitle: {
        type: JobType.asr | JobType.mapper;
    };
};
export type JobBaseConfig = {
    id: string;
    state: JobState;
    map?: {
        [key: string]: Pick<JobBaseConfig, 'id'>;
    };
};
export type JobRunnerConfig<T extends keyof JobRunnerConfigs> = JobRunnerConfigs[T] & JobBaseConfig;
export interface IVideoConfig extends BasicConfig, ICoordinateConfig {
    mediaId: string;
    mediaIdType?: MediaIdType;
    title: string;
    comment?: string;
    content?: string;
    avatarId?: string;
    voice?: string;
    customizedVoice?: string;
    speechRate?: number;
    pitchRate?: number;
    loopMotion?: boolean;
    in: number;
    out: number;
    virginDuration: number;
    _virginVolume?: number;
    src: string;
    maskVideoURL?: string;
    _agentAudioSrc?: string;
    speed?: number;
    volume?: EffectVolume;
    vfx?: EffectVFX;
    filter?: EffectFilter;
    effectPriority?: Array<'vfx' | 'filter'>;
    asrLoading?: boolean | string;
    _asrJobSubtitle?: number;
    snapshots?: string[];
    sprites?: string[];
    spriteConfig?: SpriteConfig;
    fadeIn?: EffectFadeIn;
    fadeOut?: EffectFadeOut;
    background?: BackgroundConfig;
    flip?: FlipType[];
    _codec?: string;
    _audioWaveform?: AudioChannel;
    _showWaveformFailedReason?: SHOW_AUDIO_WAVEFORM_FAILED_REASON;
    _hasTranscodedAudio?: boolean;
    _jobRunner?: JobRunnerConfig<'video'>;
    _jobId?: string;
    _disableTrack?: boolean;
    _matting?: MattingConfig;
    marks?: ClipMark[];
    _audioDenoise?: {
        mode: number;
    };
    _detextLoading?: boolean | string;
    _detextArea?: 'auto' | Array<[number, number, number, number]>;
    _captionExtractionLoading?: boolean | string;
    _captionExtractionArea?: 'auto' | Array<[number, number, number, number]>;
    _videoTranslationLoading?: boolean | string;
    _videoTranslationConfig?: {
        sourceLanguage: string;
        targetLanguage: string;
    };
    _audioLoudNormal?: AloudNormConfig;
}
export interface IAudioConfig extends BasicConfig {
    mediaId: string;
    mediaIdType?: MediaIdType;
    title: string;
    in: number;
    out: number;
    voice?: string;
    customizedVoice?: string;
    _videoIn?: number;
    _videoOut?: number;
    virginDuration: number;
    _virginVolume?: number;
    src: string;
    speed?: number;
    volume?: EffectVolume;
    asrLoading?: boolean | string;
    ttsLoading?: boolean | string;
    _asrJobSubtitle?: number;
    fadeIn?: EffectFadeIn;
    fadeOut?: EffectFadeOut;
    marks?: ClipMark[];
    content?: string;
    speechRate?: number;
    pitchRate?: number;
    loopMode?: boolean;
    _audioWaveform?: AudioChannel;
    _jobRunner?: JobRunnerConfig<'audio'>;
    _ttsJobId?: string;
    _audioDenoise?: {
        mode: number;
    };
    _audioLoudNormal?: AloudNormConfig;
}
export interface IImageConfig extends BasicConfig, ICoordinateConfig {
    mediaId: string;
    mediaIdType?: MediaIdType;
    title: string;
    src: string;
    previewUrl: string;
    dyncFrames?: number;
    fps?: number;
    _x?: number | string;
    _y?: number | string;
    vfx?: EffectVFX;
    filter?: EffectFilter;
    effectPriority?: Array<'vfx' | 'filter'>;
    background?: BackgroundConfig;
    flip?: FlipType[];
    _matting?: MattingConfig;
}
export interface ITransitionConfig extends BasicConfig {
    name: string;
    subType: string;
    from: number;
    to: number;
}
type EffectProperyType = {
    defaultVal: number;
};
export type EffectProperyFullType = EffectProperyType & {
    field: string;
    type: 'string' | 'number';
    range: Array<{
        type: '[' | ']' | '(' | ')';
        value: number | '+∞' | 'width' | 'height';
    }>;
    fieldType: 'float' | 'int';
    disable?: boolean;
    ui?: {
        component: 'range' | 'switch' | 'position_x' | 'position_y';
        group?: string;
    };
};
export type EffectProperiesType = {
    [key: string]: EffectProperyFullType;
};
export interface IJsonEffectConfig {
    name: string;
    subType: string;
    category?: string;
    hidden?: boolean;
    effectType: 'filter' | 'effect';
    coverUrl: string;
    previewUrl?: string;
    canScale?: boolean;
    effectConfig?: {
        image?: string;
    };
    extParams?: string;
}
export interface IJsonTransitionConfig {
    subType: string;
    name: string;
    category: string;
    coverUrl: string;
    previewUrl: string;
}
export interface IEffectConfig extends EffectVFX, BasicConfig, ICoordinateConfig {
}
export interface IFilterConfig extends IEffectConfig {
}
export type XPosition = 'left' | 'middle' | 'right';
export type YPosition = 'top' | 'middle' | 'bottom';
export type PositionData = {
    align: string;
    x: number;
    y: number;
    _x: XPosition;
    _y: YPosition;
};
export type BorderStyle = 1 | 3;
export type AdaptMode = 'AutoWrap' | 'AutoScale' | 'AutoWrapAtSpaces';
export interface ISubtitleConfig extends BasicConfig {
    isImport?: boolean;
    alignment?: string;
    content: string;
    fontSize: number;
    fontFamily: string;
    textureURL?: string | null;
    fontColorOpacity: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    color: string;
    align?: string;
    width?: number;
    height?: number;
    _x?: number | XPosition;
    _y?: number | YPosition;
    _custom?: 'auto' | 'user';
    _asrJobSource?: number;
    x?: number;
    y?: number;
    effectColorStype?: string | null;
    bubbleStyleId?: string | null;
    bubbleWidth?: number;
    bubbleHeight?: number;
    outlineColour?: string;
    outline?: number;
    shadow?: number;
    backColour?: string;
    spacing?: number;
    aaiMotionIn?: number;
    aaiMotionOut?: number;
    aaiMotionInEffect?: string;
    aaiMotionOutEffect?: string;
    aaiMotionLoopEffect?: string;
    ratio?: number;
    angle?: number;
    borderStyle?: BorderStyle;
    adaptMode?: AdaptMode;
    textWidth?: number;
    lineSpacing?: number;
    subtitleEffects?: ISubtitleEffect[];
    sizeRequestType?: 'Nominal' | 'RealDim';
    outlineOpacity?: number;
    backOpacity?: number;
    _jobRunner?: JobRunnerConfig<'subtitle'>;
    _language?: string;
    _videoTranslationConfig?: {
        sourceLanguage: string;
        targetLanguage: string;
        textArray?: boolean;
    };
    _videoTranslationLoading?: boolean | string;
}
export interface ISubtitleEffect {
    type: 'Outline' | 'Shadow' | 'Box';
    _bizType: 'Outline' | 'Shadow' | 'Shine' | 'Box';
    _sort?: number;
    _id: number;
    _enable: boolean;
    _hidden?: boolean;
    _style?: string;
    _width?: number;
    _height?: number;
    _scale?: number;
    bord?: number;
    xBord?: number;
    yBord?: number;
    shift?: number;
    xShift?: number;
    yShift?: number;
    color?: string;
    opacity?: number;
    borderStyle?: number;
    blur?: number;
    imageUrl?: string;
    textArea?: string;
    width?: number;
    height?: number;
    radius?: number;
}
export interface ISubtitleDecoratedImage {
    width: number;
    height: number;
    image: ImageBitmap;
}
export interface IStickerConfig extends BasicConfig, ICoordinateConfig {
    mediaId: string;
    mediaIdType?: MediaIdType;
    src: string;
    dyncFrames?: number;
    fps?: number;
    _x?: number | string;
    _y?: number | string;
}
export interface CropCoordination {
    cropping: boolean;
    croppingX: number;
    croppingY: number;
    croppingWidth: number;
    croppingHeight: number;
}
export interface CropChangeInfo {
    id?: number;
    coordination: CropCoordination;
    ratio?: number;
}
export type ImageAdaptMode = 'Contain' | 'Cover' | 'Fill';
export interface ICoordinateConfig {
    _x?: number | string;
    _y?: number | string;
    adaptMode?: ImageAdaptMode;
    x: number;
    y: number;
    width: number;
    height: number;
    keepResizeRatio?: boolean;
    cropX?: number;
    cropY?: number;
    cropWidth?: number;
    cropHeight?: number;
    opacity?: number;
    _rotateDegree?: number;
}
export interface DragItem {
    type: 'material' | 'boundary' | 'transition';
    material: SingleMaterialWithId;
    dragType: 'addMaterial' | 'moveMaterial' | 'leftBoundary' | 'rightBoundary';
}
export interface SingleMaterial {
    type: MaterialType;
    jobType?: AiJobType;
    businessType?: MaterialType | GlobalMaterialType;
    config: IVideoConfig | IAudioConfig | IImageConfig | ISubtitleConfig | IStickerConfig | ITransitionConfig | IEffectConfig | IFilterConfig;
}
export interface SingleMaterialWithId extends SingleMaterial {
    id: number;
    trackId: number;
}
export interface Track extends TrackConfig {
    id: number;
    type: TrackType;
    materials: SingleMaterialWithId[];
}
export interface ExportClip {
    id: number;
    type: MaterialType;
    jobType?: AiJobType;
    businessType?: MaterialType | GlobalMaterialType;
    timelineIn: number;
    timelineOut: number;
}
export interface ExportTrack {
    id: number;
    type: TrackType;
    clips: ExportClip[];
    visible: boolean;
    mainTrack?: boolean;
}
export interface TrackConfig {
    visible: boolean;
    disabled?: boolean;
    singleMaterial?: boolean;
    muted?: boolean;
    volume?: {
        gain: number;
    };
    mainTrack?: boolean;
    trackShortenMode?: 'AutoSpeed';
    trackExpandMode?: 'AutoSpeed';
}
export type Tracks = Track[];
export declare enum AudioChannel {
    left = "left",
    right = "right"
}
export declare enum PlayerAspectRatio {
    w1h1 = "1:1",
    w2h1 = "2:1",
    w4h3 = "4:3",
    w3h4 = "3:4",
    w9h16 = "9:16",
    w16h9 = "16:9",
    w21h9 = "21:9"
}
export declare enum PlayerSpeed {
    x0_5 = 0.5,
    x1_0 = 1,
    x1_5 = 1.5,
    x2_0 = 2,
    x3_0 = 3,
    x4_0 = 4
}
export declare enum AudioProduceVoice {
    xiaoyun = "xiaoyun",
    xiaogang = "xiaogang",
    sitong = "sitong",
    aitong = "aitong"
}
export declare enum VoiceType {
    Male = "Male",
    Female = "Female",
    Boy = "Boy",
    Girl = "Girl"
}
export interface Voice {
    voiceUrl?: string;
    demoMediaId?: string;
    voiceType: VoiceType;
    voice: string;
    name: string;
    desc: string;
    tag?: string;
    remark?: string;
    custom?: boolean;
}
export interface VoiceGroup {
    type: string;
    category?: string;
    voiceList?: Voice[];
    emptyContent?: {
        description: string;
        linkText: string;
        link: string;
    };
    getVoiceList?: (page: number, pageSize: number) => Promise<{
        items: Voice[];
        total: number;
    }>;
    getVoice?: (voiceId: string) => Promise<Voice | null>;
    getDemo?: (mediaId: string) => Promise<{
        src: string;
    }>;
}
export interface IBackendTimeline {
    Version: number;
    SdkVersion: string;
    VideoTracks: any;
    AudioTracks: any;
    AspectRatio?: PlayerAspectRatio;
    From: string;
    FECanvas: {
        Width: number;
        Height: number;
    };
    FEConfig?: FEConfig;
}
export interface IPoint {
    x: number;
    y: number;
}
export interface IMutilDragData {
    minTimelineIn: number;
    minTimelineInId: number;
    maxTimelineOut: number;
    maxTimelineOutId: number;
    actualDragId: number;
    dragIdMap: {
        [trackId: number]: SingleMaterialWithId[];
    };
}
export interface Defer<T = any> {
    resolve: (data: T) => void;
    reject: (error: any) => void;
    promise: Promise<T>;
}
export type Dispose = () => void;
export type EventListener<T = any> = (event: T) => void;
export interface IListenable<T extends string, S = any> {
    on: (event: T, listener: EventListener) => Dispose;
    off: (event: T, listener: EventListener) => void;
    trigger: (event: T, data: S) => void;
    get observable(): IObservable<{
        type: T;
        data: S;
    }>;
}
export interface SubtitleLine {
    timelineIn: number;
    timelineOut: number;
    content: string;
}
export interface AudioSource {
    sampleRate?: number;
    leftChannelData?: Float32Array;
    rightChannelData?: Float32Array;
    error?: boolean;
}
export declare enum TooltipTriggerType {
    click = "click",
    hover = "hover"
}
export type AloudNormConfig = {
    loudness: number;
    truePeak: number;
};
export declare const AloudNormalDefault: AloudNormConfig;
export type AEqualizeConfig = {
    peak: number;
    gain: number;
};
export declare const AEqualizeDefault: AEqualizeConfig;
export {};
